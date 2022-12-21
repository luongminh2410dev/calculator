import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
// import RNHapticFeedback from "react-native-haptic-feedback";
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather'

const caculatorUnit = ['deg', 'rad', 'grad'];

const AdvanceCalculator = (props) => {
    const { navigation } = props;
    const refDisplayView = useRef();
    const [unit, setUnit] = useState(caculatorUnit[0]);
    const refUnitCount = useRef(0);

    const Vibrate = () => {
    }

    const calculate = () => {
        Vibrate();
        refDisplayView.current?.calculate();
    }

    const numPressed = (val) => {
        Vibrate();
        refDisplayView.current?.numPressed(val);
    }

    const buttonPressed = (val) => {
        Vibrate();
        refDisplayView.current?.buttonPressed(val);
    }

    const functionPressed = (val) => {
        Vibrate();
        refDisplayView.current?.functionPressed(val);
    }

    const deleteHandler = () => {
        Vibrate();
        refDisplayView.current?.deleteHandler();
    }

    const clearHandler = () => {
        Vibrate();
        refDisplayView.current?.clearHandler();
    }

    const dotHandler = () => {
        Vibrate();
        refDisplayView.current?.dotHandler();
    }

    const selectionMoveToLeft = () => {
        Vibrate();
        refDisplayView.current?.selectionMoveToLeft();
    }

    const selectionMoveToRight = () => {
        Vibrate();
        refDisplayView.current?.selectionMoveToRight();
    }

    const handleGetResult = () => {
        Vibrate();
        refDisplayView.current?.getAnswer()
    }

    const toggleShiftButton = (st) => {
        Vibrate();
        refDisplayView.current?.updateShiftActive(st);
    }

    const toggleAlphaButton = (st) => {
        Vibrate();
        refDisplayView.current?.updateAlphaActive(st);
    }

    const convertResult = (type) => {
        Vibrate();
        refDisplayView.current?.convertResult(type);
    }

    const updateUnit = () => {
        refUnitCount.current++;
        setUnit(caculatorUnit[refUnitCount.current % 3]);
    }

    const onNavigateBack = () => navigation.goBack();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onNavigateBack}>
                    <Feather name='arrow-left' size={24} color='white' />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Display
                    ref={refDisplayView}
                    unit={unit} />
                <View style={styles.list_button}>
                    <Keyboard
                        updateShiftState={toggleShiftButton}
                        updateAlphaState={toggleAlphaButton}
                        selectionMoveToLeft={selectionMoveToLeft}
                        selectionMoveToRight={selectionMoveToRight}
                        buttonPressed={buttonPressed}
                        functionPressed={functionPressed}
                        numPressed={numPressed}
                        deleteHandler={deleteHandler}
                        clearHandler={clearHandler}
                        dotHandler={dotHandler}
                        handleGetResult={handleGetResult}
                        calculate={calculate}
                        convertResult={convertResult}
                        unit={unit}
                        updateUnit={updateUnit}
                    />
                </View>
            </View>
        </View>
    );
}
export default AdvanceCalculator