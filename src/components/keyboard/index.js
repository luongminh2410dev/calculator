import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../utils'
import styles from './styles'

const NumberKeyboard = (props) => {
    const { onKeyboardPress, onSliceValue } = props;
    return (
        <View style={styles.keyboard}>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(7)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(8)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(9)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(4)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(5)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(6)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(1)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(2)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(3)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => onKeyboardPress('.')}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>•</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onKeyboardPress(0)}
                    style={styles.key_btn}>
                    <Text adjustsFontSizeToFit style={styles.key_btn_txt}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onSliceValue}
                    style={styles.key_btn}>
                    <Feather name='delete' size={30} color={Colors.WHITE} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NumberKeyboard