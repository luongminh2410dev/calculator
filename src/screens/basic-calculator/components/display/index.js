import { all, create } from "mathjs";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

const Mathjs = create(all);

const keyExtractor = (item, index) => `history_${index}`;
const BasicDisplay = forwardRef((props, ref) => {
    const [expr, setExpr] = useState('');
    const [histories, setHistories] = useState([]);
    const refDisplayer = useRef();
    const refEqualled = useRef(false);
    const refPercented = useRef(false);
    const refExprReverted = useRef('');

    useImperativeHandle(ref, () => ({
        onButtonPress: (value) => {
            setExpr(`${expr}${value}`);
            refEqualled.current = false;
            refPercented.current = false;
        },
        onFuncPress: (value) => {
            refEqualled.current = false;
            switch (value) {
                case '%':
                    expr != '' ?
                        setExpr(`(${expr})%`)
                        :
                        setExpr('%')
                    refPercented.current = true;
                    break;
                case '+-':
                    if (refExprReverted.current != '' && refExprReverted.current != expr) {
                        setExpr(refExprReverted.current)
                    }
                    else {
                        refExprReverted.current = expr;
                        setExpr(`-(${expr})`);
                    }
                    break;
                default:
                    setExpr(`${expr} ${value} `);
                    break;
            }
        },
        calculate: () => {
            if (refEqualled.current) return;
            let res;
            try {
                res = parseFloat(Mathjs.evaluate(expr).toFixed(4));
            } catch (e) {
                setExpr('ERROR')
            }
            if (!isNaN(res)) {
                setExpr(refPercented.current ? `${res * 100}%` : res)
                setHistories([...histories, `${expr} = ${res}`]);
                refEqualled.current = true;
                refPercented.current = false;
                refExprReverted.current = res
            }
            else {
                setExpr('ERROR')
            }
        },
        clear: () => {
            expr == '' ?
                setHistories([])
                :
                setExpr('')
        }
    }))

    useEffect(() => {
        refDisplayer.current?.scrollToEnd();
    }, [histories])

    const renderHistoryItem = ({ item, index }) => {
        return (
            <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.history_item}>{item}</Text>
        )
    }

    return (
        <View style={styles.list_result}>
            <FlatList
                ref={refDisplayer}
                data={histories}
                keyExtractor={keyExtractor}
                renderItem={renderHistoryItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
            <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.current_expr}>{expr}</Text>
        </View>
    )
})

export default BasicDisplay