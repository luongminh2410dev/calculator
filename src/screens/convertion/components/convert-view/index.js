import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../../../utils'
import styles from './styles'

const ConvertView = forwardRef((props, ref) => {
    const [unit1, setUnit1] = useState('usd');
    const [unit2, setUnit2] = useState('vnd');
    const [inputValue, setInputValue] = useState(0);

    const refEnableDotButton = useRef(false);

    // const inputValueTxt = inputValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    // const outputValueTxt = (inputValue * 22000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    const inputValueTxt = inputValue;
    const outputValueTxt = (inputValue * 22000);

    useImperativeHandle(ref, () => ({
        keyboardPress: (key) => {
            if (key == '.') {
                return refEnableDotButton.current = true;
            }
            if (refEnableDotButton.current) {
                setInputValue(parseFloat(`${inputValue}.${key}`));
                refEnableDotButton.current = false;
                return;
            }
            return setInputValue(parseFloat(`${inputValue}${key}`))
        },
        sliceInputValue: () => {
            const newValue = inputValue.toString().slice(0, -1);
            newValue ?
                setInputValue(parseFloat(newValue))
                :
                setInputValue(0)
        },
        changeConvertType: (type) => {

        }
    }))

    const onRevertConvert = () => {

    }

    return (
        <View style={styles.covert_view}>
            <View style={styles.convert_box}>
                <Text style={styles.convert_box_title}>Từ</Text>
                <View style={styles.convert_box_info}>
                    <TouchableOpacity style={styles.covert_value_btn}>
                        <Text style={styles.convert_box_txt}>{unit1.toUpperCase()}</Text>
                        <Entypo name='chevron-down' size={22} color={Colors.BACKGROUND} />
                    </TouchableOpacity>
                    <Text style={styles.convert_box_txt}>{inputValueTxt}</Text>
                </View>
            </View>
            <View style={[styles.convert_box, { backgroundColor: Colors.WHITE }]}>
                <Text style={styles.convert_box_title}>Sang</Text>
                <View style={styles.convert_box_info}>
                    <View style={styles.covert_value_btn}>
                        <Text style={styles.convert_box_txt}>{unit2.toUpperCase()}</Text>
                        <Entypo name='chevron-down' size={22} color={Colors.BACKGROUND} />
                    </View>
                    <Text style={styles.convert_box_txt}>{outputValueTxt}</Text>
                </View>
            </View>
            <View style={styles.revert_view}>
                <TouchableOpacity onPress={onRevertConvert} style={styles.revert_btn}>
                    <Feather name='repeat' size={20} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )
})

export default ConvertView