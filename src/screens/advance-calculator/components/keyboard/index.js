import React, { useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Colors, Metrics } from '../../../../utils'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';

const AnimatedText = Animated.createAnimatedComponent(Text);
const Keyboard = (props) => {
    const {
        updateShiftState, updateAlphaState, selectionMoveToLeft, selectionMoveToRight,
        buttonPressed, functionPressed, numPressed, deleteHandler, clearHandler,
        dotHandler, handleGetResult, calculate, convertResult, unit, updateUnit,
    } = props;
    const refShiftActive = useRef(false);
    const refAlphaActive = useRef(false);

    const SuperScriptText = ({ style, text, supText }) => (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={style}>{text}</Text>
            <Text style={{ fontSize: style.fontSize * 0.7, color: style.color }}>{supText}</Text>
        </View>
    )

    const toggleShiftButton = () => {
        refShiftActive.current = !refShiftActive.current;
        refAlphaActive.current = false;
        updateShiftState(refShiftActive.current);
    }

    const toggleAlphaButton = () => {
        refAlphaActive.current = !refAlphaActive.current;
        refShiftActive.current = false;
        updateAlphaState(refAlphaActive.current);
    }

    const handleNumbPress = (value) => {
        numPressed(value);
        refShiftActive.current = false;
        refAlphaActive.current = false;
    }

    const handleButtonPress = (value) => {
        buttonPressed(value);
        refShiftActive.current = false;
        refAlphaActive.current = false;
    }

    const handleFunctionPress = (value) => {
        functionPressed(value);
        refShiftActive.current = false;
        refAlphaActive.current = false;
    }

    const _handleGetResult = () => {
        refShiftActive.current = false;
        refAlphaActive.current = false;
        handleGetResult();
    }

    const _clearHandler = () => {
        refShiftActive.current = false;
        refAlphaActive.current = false;
        clearHandler()
    }

    const UnitButton = () => {
        switch (unit) {
            case 'deg':
                return (
                    <AnimatedText
                        entering={FadeInDown.duration(250)}
                        exiting={FadeOutUp.duration(200)}
                        style={styles.func_txt}>
                        RAD
                    </AnimatedText>
                )
            case 'rad':
                return (
                    <AnimatedText
                        entering={FadeInDown.duration(250)}
                        exiting={FadeOutUp.duration(200)}
                        style={styles.func_txt}>
                        GRAD
                    </AnimatedText>
                )
            case 'grad':
                return (
                    <AnimatedText
                        entering={FadeInDown.duration(250)}
                        exiting={FadeOutUp.duration(200)}
                        style={styles.func_txt}>
                        DEG
                    </AnimatedText>
                )
        }
    }

    return (
        <>
            {/* FUNCTIONS */}
            <View style={styles.functions}>
                <View style={styles.row}>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.func_btn, styles.shift_btn]}
                            onPressIn={toggleShiftButton}>
                            <Text numberOfLines={1} style={[styles.func_txt, styles.special_func_text]}>SHIFT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.func_btn, styles.alpha_btn]}
                            onPressIn={toggleAlphaButton}>
                            <Text numberOfLines={1} style={[styles.func_txt, styles.special_func_text]}>ALPHA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={selectionMoveToLeft}>
                            <AntDesign name="arrowleft" size={20} color={Colors.WHITE} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={selectionMoveToRight}>
                            <AntDesign name="arrowright" size={20} color={Colors.WHITE} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={updateUnit}>
                            <UnitButton />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => numPressed('pi')}>
                            <Text style={styles.func_txt}>π</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress('-')}>
                            <Text style={styles.func_txt}>( − )</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleButtonPress(refShiftActive.current ? '!' : '^-1')}>
                            <View style={styles.shift_hint}>
                                <Text style={styles.shift_hint_txt}>x!</Text>
                            </View>
                            <SuperScriptText style={styles.func_txt} text="x" supText="-1" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress('/')}>
                            <Text style={styles.func_txt}>a／b</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress(refShiftActive.current ? 'cbrt(' : 'sqrt(')}>
                            <View style={styles.shift_hint}>
                                <Text style={styles.shift_hint_txt}>∛x</Text>
                            </View>
                            <Text style={styles.func_txt}>√x</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleButtonPress(refShiftActive.current ? '^3' : '^2')}>
                            <View style={styles.shift_hint}>
                                <SuperScriptText style={styles.shift_hint_txt} text="x" supText="3" />
                            </View>
                            <SuperScriptText style={styles.func_txt} text="x" supText="2" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => refShiftActive.current ? handleButtonPress('^') : handleFunctionPress('nthRoot(')}>
                            <View style={styles.shift_hint}>
                                <Text style={styles.shift_hint_txt}>ⁿ√x</Text>
                            </View>
                            <SuperScriptText style={styles.func_txt} text="x" supText="n" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => convertResult('DDToDMS')}>
                            <Text style={styles.func_txt}>° ' "</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress(refShiftActive.current ? 'asin(' : 'sin(')}>
                            <View style={styles.shift_hint}>
                                <SuperScriptText style={styles.shift_hint_txt} text="sin" supText="-1" />
                            </View>
                            <Text style={styles.func_txt}>sin</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress(refShiftActive.current ? 'acos(' : 'cos(')}>
                            <View style={styles.shift_hint}>
                                <SuperScriptText style={styles.shift_hint_txt} text="cos" supText="-1" />
                            </View>
                            <Text style={styles.func_txt}>cos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress(refShiftActive.current ? 'atan(' : 'tan(')}>
                            <View style={styles.shift_hint}>
                                <SuperScriptText style={styles.shift_hint_txt} text="tan" supText="-1" />
                            </View>
                            <Text style={styles.func_txt}>tan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress(refShiftActive.current ? '10^' : 'log(')}>
                            <View style={styles.shift_hint}>
                                <SuperScriptText style={styles.shift_hint_txt} text="10" supText="x" />
                            </View>
                            <Text style={styles.func_txt}>log</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress(refShiftActive.current ? 'e^' : 'ln(')}>
                            <View style={styles.shift_hint}>
                                <SuperScriptText style={styles.shift_hint_txt} text="e" supText="x" />
                            </View>
                            <Text style={styles.func_txt}>ln</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress('abs(')}>
                            <Text style={styles.func_txt}>| x |</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleFunctionPress(refShiftActive.current ? 'acot(' : 'cot(')}>
                            <View style={styles.shift_hint}>
                                <SuperScriptText style={styles.shift_hint_txt} text="cot" supText="-1" />
                            </View>
                            <Text style={styles.func_txt}>cot</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleButtonPress(refShiftActive.current ? '%' : '(')}>
                            <View style={styles.shift_hint}>
                                <Text style={styles.shift_hint_txt}>%</Text>
                            </View>
                            <Text style={styles.func_txt}>(</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => handleButtonPress(refShiftActive.current ? ',' : ')')}>
                            <View style={styles.shift_hint}>
                                <Text style={styles.shift_hint_txt}>❜</Text>
                            </View>
                            <Text style={styles.func_txt}>)</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => convertResult('DDToFrac')}>
                            <Text style={styles.func_txt}>S⇔D</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.func_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.func_btn}
                            onPressIn={() => { }}>
                            <View style={styles.shift_hint}>
                                <Text style={styles.shift_hint_txt}>M-</Text>
                            </View>
                            <Text style={styles.func_txt}>M+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* ACTIONS */}
            <View style={styles.actions}>
                <View style={styles.row}>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("7")}>
                            <Text style={styles.action_txt}>7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("8")}>
                            <Text style={styles.action_txt}>8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("9")}>
                            <Text style={styles.action_txt}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={deleteHandler}>
                            <Text style={styles.action_txt}>DEL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={_clearHandler}>
                            <Text style={styles.action_txt}>AC</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("4")}>
                            <Text style={styles.action_txt}>4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("5")}>
                            <Text style={styles.action_txt}>5</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("6")}>
                            <Text style={styles.action_txt}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.action_btn, styles.special_action_btn]}
                            onPressIn={() => refAlphaActive.current ? handleFunctionPress('gcd(') : handleButtonPress("*")}>
                            <View style={styles.alpha_hint}>
                                <Text style={styles.alpha_hint_txt}>GCD</Text>
                            </View>
                            <Text style={[styles.action_txt, styles.special_action_txt]}>×</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.action_btn, styles.special_action_btn]}
                            onPressIn={() => refAlphaActive.current ? handleFunctionPress('lcm(') : handleButtonPress("/")}>
                            <View style={styles.alpha_hint}>
                                <Text style={styles.alpha_hint_txt}>LCM</Text>
                            </View>
                            <Text style={[styles.action_txt, styles.special_action_txt]}>÷</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("1")}>
                            <Text style={styles.action_txt}>1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("2")}>
                            <Text style={styles.action_txt}>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => handleNumbPress("3")}>
                            <Text style={styles.action_txt}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.action_btn, styles.special_action_btn]}
                            onPressIn={() => refAlphaActive.current ? handleFunctionPress('ceil(') : handleButtonPress("+")}>
                            <View style={styles.alpha_hint}>
                                <Text style={styles.alpha_hint_txt}>Ceil</Text>
                            </View>
                            <Text style={[styles.action_txt, styles.special_action_txt]}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.action_btn, styles.special_action_btn]}
                            onPressIn={() => refAlphaActive.current ? handleFunctionPress('floor(') : handleButtonPress("-")}>
                            <View style={styles.alpha_hint}>
                                <Text style={styles.alpha_hint_txt}>Floor</Text>
                            </View>
                            <Text style={[styles.action_txt, styles.special_action_txt]}>−</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => numPressed("0")}>
                            <Text style={styles.action_txt}>0</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={dotHandler}>
                            <Text style={styles.action_txt}>•</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={styles.action_btn}
                            onPressIn={() => refAlphaActive.current ? handleButtonPress('e') : functionPressed('exp(')}>
                            <View style={styles.alpha_hint}>
                                <Text style={styles.alpha_hint_txt}>e</Text>
                            </View>
                            <Text style={styles.action_txt}>Exp</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.action_btn, styles.special_action_btn]}
                            onPressIn={_handleGetResult}>
                            <View style={styles.alpha_hint}>
                                <Text style={styles.alpha_hint_txt}>PreAns</Text>
                            </View>
                            <Text style={[styles.action_txt, styles.special_action_txt]}>Ans</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action_item}>
                        <TouchableOpacity
                            hitSlop={Metrics.HIT_SLOP}
                            style={[styles.action_btn, styles.special_action_btn]}
                            onPressIn={calculate}>
                            <Text style={[styles.action_txt, styles.special_action_txt]}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Keyboard