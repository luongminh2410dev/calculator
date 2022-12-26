import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { convertRatio } from '../../../../const'
import { Colors } from '../../../../utils'
import styles from './styles'

const ConvertView = forwardRef((props, ref) => {
    const { handleShowUnitModal } = props;
    const [unit1, setUnit1] = useState('USD');
    const [unit2, setUnit2] = useState('VND');
    const [inputValue, setInputValue] = useState(0);
    const [ratio, setRatio] = useState(() => {
        return convertRatio['currency'][unit2].value / convertRatio['currency'][unit1].value;
    });

    const refEnableDotButton = useRef(false);
    const refCovertType = useRef(convertRatio['currency']);
    const refChangeUnit = useRef('');

    const unit1Text = refCovertType.current[unit1].code;
    const unit2Text = refCovertType.current[unit2].code;

    // const inputValueTxt = inputValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    // const outputValueTxt = (inputValue * 22000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    const inputValueTxt = inputValue;
    const outputValueTxt = Math.round(inputValue * ratio * 10000) / 10000;

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
            refCovertType.current = convertRatio[type];
            const newUnit1 = Object.keys(refCovertType.current)[0];
            const newUnit2 = Object.keys(refCovertType.current)[1];
            setUnit1(newUnit1);
            setUnit2(newUnit2);
            setRatio(refCovertType.current[newUnit2].value / refCovertType.current[newUnit1].value);
            setInputValue(0);
        },
        onUnitChange: (unit) => {
            switch (refChangeUnit.current) {
                case 1:
                    setRatio(refCovertType.current[unit2].value / refCovertType.current[unit].value);
                    setUnit1(unit);
                    break;
                case 2:
                    setRatio(refCovertType.current[unit].value / refCovertType.current[unit1].value);
                    setUnit2(unit);
                    break;
            }
        }
    }))

    const onRevertConvert = () => {
        const newUnit2 = unit1;
        setUnit1(unit2);
        setUnit2(newUnit2);
        setRatio(1 / ratio);
    }

    const handleShowSelectUnit = (key) => {
        refChangeUnit.current = key;
        handleShowUnitModal(key == 1 ? unit1 : unit2);
    }

    return (
        <View style={styles.covert_view}>
            <View style={styles.convert_box}>
                <Text style={styles.convert_box_title}>Từ</Text>
                <View style={styles.convert_box_info}>
                    <TouchableOpacity
                        onPress={() => handleShowSelectUnit(1)}
                        style={styles.covert_value_btn}>
                        <Text style={styles.convert_box_txt}>{unit1Text}</Text>
                        <Entypo name='chevron-down' size={22} color={Colors.BACKGROUND} />
                    </TouchableOpacity>
                    <Text style={styles.convert_box_txt}>{inputValueTxt}</Text>
                </View>
            </View>
            <View style={[styles.convert_box, styles.convert_box_2]}>
                <Text style={styles.convert_box_title}>Sang</Text>
                <View style={styles.convert_box_info}>
                    <TouchableOpacity
                        onPress={() => handleShowSelectUnit(2)}
                        style={styles.covert_value_btn}>
                        <Text style={styles.convert_box_txt}>{unit2Text}</Text>
                        <Entypo name='chevron-down' size={22} color={Colors.BACKGROUND} />
                    </TouchableOpacity>
                    <Text style={styles.convert_box_txt}>{outputValueTxt}</Text>
                </View>
            </View>
            <View style={styles.revert_view}>
                <TouchableOpacity onPress={onRevertConvert} style={styles.revert_btn}>
                    <Feather name='repeat' size={20} color={Colors.WHITE} />
                </TouchableOpacity>
            </View>
        </View>
    )
})

export default ConvertView