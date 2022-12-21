import React, { useRef } from 'react';
import { View } from 'react-native';
import BasicDisplay from './components/display';
import BasicKeyboard from './components/keyboard';
import styles from './styles';

const BasicCalculator = (props) => {
    const refDisplay = useRef();

    const onButtonPress = (value) => {
        refDisplay.current?.onButtonPress(value);
    }

    const onFuncPress = (value) => {
        refDisplay.current?.onFuncPress(value)
    }

    const onCalculate = () => {
        refDisplay.current?.calculate();
    }

    const clearDisplay = () => {
        refDisplay.current?.clear();
    }

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <BasicDisplay ref={refDisplay} />
            </View>
            <View style={styles.buttons}>
                <BasicKeyboard
                    onButtonPress={onButtonPress}
                    onFuncPress={onFuncPress}
                    onCalculate={onCalculate}
                    clearDisplay={clearDisplay}
                />
            </View>

        </View>
    )
}

export default BasicCalculator