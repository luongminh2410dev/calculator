import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../utils';
const keyExtractor = (item, index) => `history_${index}`;
const BasicCalculator = (props) => {
    const { navigation } = props;
    const [histories, setHistories] = useState([]);
    const refDisplayer = useRef();

    const navigateToAdvanceCalculator = () => {
        navigation.navigate('AdvanceCalculator')
    }

    useEffect(() => {
        refDisplayer.current?.scrollToEnd();
    }, [histories])

    const renderHistoryItem = ({ item, index }) => {
        return (
            <View>
                <Text style={{ color: 'white', fontSize: 20 }}>{item}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <View style={styles.list_result}>
                    <FlatList
                        ref={refDisplayer}
                        data={histories}
                        keyExtractor={keyExtractor}
                        renderItem={renderHistoryItem}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <View style={styles.buttons}>
                <View style={styles.buttons_row}>
                    <TouchableOpacity
                        onPress={() => handleButtonPress(refShiftActive.current ? '%' : '(')}
                        activeOpacity={0.7}
                        style={styles.button_item}>
                        <Text style={styles.button_item_txt}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button_item}>
                        <Text style={styles.button_item_txt}>+/−</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button_item}>
                        <Text style={styles.button_item_txt}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={navigateToAdvanceCalculator}
                        activeOpacity={0.7}
                        style={styles.button_item}>
                        <Feather name='maximize-2' size={24} color={Colors.BACKGROUND} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttons}>
                <View style={styles.buttons_row}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_func]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>÷</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.buttons}>
                <View style={styles.buttons_row}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_func]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>×</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttons}>
                <View style={styles.buttons_row}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_func]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>−</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.buttons}>
                <View style={styles.buttons_row}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>•</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_number]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_func]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[styles.button_item, styles.button_func]}>
                        <Text style={[styles.button_item_txt, styles.button_number_txt]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BasicCalculator