import { all, create } from "mathjs";
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

const Mathjs = create(all);
const ln = (num) => Math.log(num);
ln.transform = (num) => ln(num);
Mathjs.import({ ln: ln });

let calUnit = 'deg';
(() => {
    let replacements = {};

    // create trigonometric functions replacing the input depending on angle config
    const fns1 = ['sin', 'cos', 'tan', 'sec', 'cot', 'csc']
    fns1.forEach((name) => {
        const fn = Mathjs[name] // the original function

        const fnNumber = function (x) {
            // convert from configured type of angles to radians
            switch (calUnit) {
                case 'deg':
                    return fn(x / 360 * 2 * Math.PI)
                case 'grad':
                    return fn(x / 400 * 2 * Math.PI)
                default:
                    return fn(x)
            }
        }

        // create a typed-function which check the input types
        replacements[name] = Mathjs.typed(name, {
            'number': fnNumber,
            'Array | Matrix': function (x) {
                return Mathjs.map(x, fnNumber)
            }
        })
    })

    // create trigonometric functions replacing the output depending on angle config
    const fns2 = ['asin', 'acos', 'atan', 'atan2', 'acot', 'acsc', 'asec']
    fns2.forEach((name) => {
        const fn = Mathjs[name] // the original function

        const fnNumber = function (x) {
            const result = fn(x)

            if (typeof result === 'number') {
                // convert to radians to configured type of angles
                switch (calUnit) {
                    case 'deg': return result / 2 / Math.PI * 360
                    case 'grad': return result / 2 / Math.PI * 400
                    default: return result
                }
            }

            return result
        }

        // create a typed-function which check the input types
        replacements[name] = Mathjs.typed(name, {
            'number': fnNumber,
            'Array | Matrix': function (x) {
                return Mathjs.map(x, fnNumber)
            }
        })
    })

    // import all replacements into math.js, override existing trigonometric functions
    Mathjs.import(replacements, { override: true });
})();

const Display = forwardRef((props, ref) => {
    const { unit } = props;
    const [expr, setExpr] = useState([]);
    const [result, setResult] = useState(0);
    const [shiftActive, setShiftActive] = useState(false);
    const [alphaActive, setAlphaActive] = useState(false);
    const [selectDeviation, setSelectDeviation] = useState(0);
    const displayExpr = useMemo(() => expr.map(i => {
        switch (i) {
            case 'sqrt(':
                return '√(';
            case 'cbrt(':
                return '∛(';
            case 'pi':
                return 'π';
            case 'deg':
                return '°';
            case 'nthRoot(':
                return 'ⁿ√(';
            default:
                return i;
        }
    }), [expr]);
    const exprSelector = useMemo(() => {
        let count = 0;
        return displayExpr.map(i => {
            count += i.length;
            return count;
        })
    }, [expr]);
    const selectionPosition = exprSelector[expr.length - 1 + selectDeviation] || 0;
    const refEqualled = useRef(false);
    const refAnswers = useRef([]);
    const refAnswerPosition = useRef(0);
    const refParsedResult = useRef(false);

    useImperativeHandle(ref, () => ({
        calculate: () => {
            let res;
            try {
                res = parseFloat(Mathjs.evaluate(expr.join(""), { Ans: refAnswers.current[0] }).toFixed(14));
            } catch (e) {
                setResult('ERROR')
                console.log(e);
            }
            if (!isNaN(res)) {
                setResult(res);
                if (!refEqualled.current) {
                    refAnswers.current.unshift(res);
                }
            }
            else {
                setResult('ERROR')
            }
            refParsedResult.current = false;
            refEqualled.current = true;
        },
        numPressed: (val) => {
            const newExpr = [...expr];
            newExpr.splice(expr.length + selectDeviation, 0, val);
            setExpr(newExpr);
            // clear
            refEqualled.current = false;
            refParsedResult.current = false;
            setShiftActive(false);
            setAlphaActive(false);
        },
        buttonPressed: (val) => {
            // if (refEqualled.current && selectDeviation == 0 && result != 'ERROR') {
            //     setExpr(['Ans', val]);
            // }
            const newExpr = [...expr];
            newExpr.splice(expr.length + selectDeviation, 0, val);
            setExpr(newExpr);
            // clear
            refEqualled.current = false;
            refParsedResult.current = false;
            setShiftActive(false);
            setAlphaActive(false);
        },
        functionPressed: (val) => {
            switch (val) {
                case '/':
                    return setExpr(['(', ...expr, ')', '/', '(']);
                case 'nthRoot(':
                    return setExpr(
                        expr.length == 0 ?
                            [val, 'x', ',', ' n', ')']
                            :
                            [val, ...expr, ',', ' n', ')']
                    );
                case '-':
                    return setExpr(['-', '(', ...expr, ')']);
                default:
                    if (refEqualled.current && expr.length != 0) {
                        setExpr([val, ...expr, ')']);
                        // setExpr([val, 'Ans', ')']);
                    }
                    else {
                        let last = [...expr].pop();
                        if (isNaN(last)) {
                            setExpr([...expr, val])
                        } else {
                            setExpr([...expr, "*", val])
                        }
                    }
                    break;
            }
            refEqualled.current = false;
            refParsedResult.current = false;
            setShiftActive(false);
            setAlphaActive(false);
        },
        deleteHandler: () => {
            if (expr.length > 0) {
                const _expr = [...expr];
                _expr.splice(expr.length + selectDeviation - 1, 1);
                setExpr(_expr);
            }
        },
        clearHandler: () => {
            refEqualled.current = false;
            refParsedResult.current = false;
            setExpr([]);
            setResult('');
            setSelectDeviation(0);
            setShiftActive(false);
            setAlphaActive(false);
        },
        dotHandler: () => {
            if (refEqualled.current) {
                setExpr([0, "."]);
            } else {
                let index = expr.lastIndexOf(".");
                if (index > -1) {
                    let num = expr.slice(index).join("");
                    if (isNaN(num)) {
                        setExpr([...expr, "."]);
                    }
                } else {
                    setExpr([...expr, "."]);
                }
            }
            refEqualled.current = false;
        },
        updateShiftActive: (st) => {
            setShiftActive(st);
            setAlphaActive(false);
        },
        updateAlphaActive: (st) => {
            setAlphaActive(st);
            setShiftActive(false);
        },
        getAnswer: () => {
            if (alphaActive) {
                if (refAnswerPosition.current <= refAnswers.current.length) {
                    refAnswerPosition.current++;
                    setResult(refAnswers.current[refAnswerPosition.current]);
                }
            }
            else {
                refAnswerPosition.current = 0;
                if (refEqualled.current) {
                    setExpr(['Ans'])
                    setResult(refAnswers.current[0])
                }
                else {
                    setExpr([...expr, 'Ans'])
                }
            }
            setShiftActive(false);
            setAlphaActive(false);
        },
        selectionMoveToLeft: () => {
            if (Math.abs(selectDeviation) <= expr.length) {
                setSelectDeviation(selectDeviation - 1)
            }
        },
        selectionMoveToRight: () => {
            if (selectDeviation < 0) {
                setSelectDeviation(selectDeviation + 1)
            }
        },
        convertResult: (type) => {
            if (expr.length > 0) {
                try {
                    switch (type) {
                        case 'DDToDMS':
                            if (refParsedResult.current) {
                                refParsedResult.current = false;
                                return setResult(Mathjs.evaluate(expr.join(''), { Ans: refAnswers.current[0] }));
                            }
                            let D = Mathjs.evaluate(expr.join(''), { Ans: refAnswers.current[0] });
                            const deg = 0 | D;
                            const min = 0 | (((D += 1e-9) % 1) * 60);
                            const sec = (0 | (((D * 60) % 1) * 6000)) / 100;
                            setResult(deg + ' ° ' + min + ' \' ' + sec + ' \"\" ');
                            break;
                        case 'DDToFrac':
                            if (refParsedResult.current) {
                                refParsedResult.current = false;
                                return setResult(Mathjs.evaluate(expr.join(''), { Ans: refAnswers.current[0] }));
                            }
                            let frac = Mathjs.fraction(Mathjs.evaluate(expr.join(''), { Ans: refAnswers.current[0] }));
                            setResult(frac.n + ' / ' + frac.d);
                            break;
                        default:
                            break;
                    }
                } catch (e) {
                    console.log(e);
                    setResult('ERROR')
                }
                refEqualled.current = true;
                refParsedResult.current = true;
            }
        },
    }))

    useEffect(() => {
        calUnit = unit;
    }, [unit])

    return (
        <View style={styles.display}>
            <View style={styles.display_container}>
                <View style={styles.tool_bar}>
                    <Text style={[styles.tool_item, { opacity: shiftActive ? 1 : 0 }]}>SHIFT</Text>
                    <Text style={[styles.tool_item, { opacity: alphaActive ? 1 : 0 }]}>ALPHA</Text>
                    <Text style={[styles.tool_item, { textTransform: 'uppercase' }]}>{unit}</Text>
                </View>
                <TextInput
                    style={styles.expression}
                    value={displayExpr.join("")}
                    selectionColor='#ef7a28'
                    selection={{ start: selectionPosition, end: selectionPosition }}
                    autoFocus
                    showSoftInputOnFocus={false}
                    maxLength={30}
                    spellCheck={false}
                    contextMenuHidden
                />
                <View style={{ flex: 1 }} />
                <Text style={styles.result}>{result}</Text>
            </View>
        </View>
    )
})

export default Display