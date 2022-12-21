import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../../../utils';
import styles from './styles';

const BasicKeyboard = (props) => {
    const { onButtonPress, onFuncPress, onCalculate, clearDisplay } = props;
    const navigation = useNavigation();

    const navigateToAdvanceCalculator = () => navigation.navigate('AdvanceCalculator');
    return (
        <>
            <View style={styles.buttons_row}>
                <TouchableOpacity
                    onPress={clearDisplay}
                    activeOpacity={0.7}
                    style={styles.button_item}>
                    <Text style={styles.button_item_txt}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFuncPress('+-')}
                    activeOpacity={0.7}
                    style={styles.button_item}>
                    <Text style={styles.button_item_txt}>+/−</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={navigateToAdvanceCalculator}
                    activeOpacity={0.7}
                    style={styles.button_item}>
                    <Feather name='maximize-2' size={28} color={Colors.BACKGROUND} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFuncPress('/')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_func]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>÷</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons_row}>
                <TouchableOpacity
                    onPress={() => onButtonPress('7')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonPress('8')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonPress('9')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFuncPress('*')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_func]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>×</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons_row}>
                <TouchableOpacity
                    onPress={() => onButtonPress('4')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonPress('5')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonPress('6')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFuncPress('-')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_func]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>−</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons_row}>
                <TouchableOpacity
                    onPress={() => onButtonPress('1')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonPress('2')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonPress('3')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFuncPress('+')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_func]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>+</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.buttons_row}>
                <TouchableOpacity
                    onPress={() => onButtonPress('.')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>•</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonPress('0')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onFuncPress('%')}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_number]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onCalculate}
                    activeOpacity={0.7}
                    style={[styles.button_item, styles.button_func]}>
                    <Text style={[styles.button_item_txt, styles.button_number_txt]}>=</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default BasicKeyboard