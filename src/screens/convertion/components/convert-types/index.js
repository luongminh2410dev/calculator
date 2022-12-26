import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { convertTypes } from '../../../../const';
import { Colors } from '../../../../utils';
import styles from './styles';

const TypeItem = (props) => {
    const { item, index, activeType, onChangeType } = props;
    const isActive = activeType == index;
    const onPress = () => {
        onChangeType(index);
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.type_item}>
            <Text style={[styles.type_item_txt, isActive && { color: Colors.PRIMARY_COLOR }]}>{item}</Text>
        </TouchableOpacity>
    )
}

const convert_types = ['Tiền tệ', 'Độ dài', 'Khối lượng', 'Diện tích', 'Thể tích', 'Thời gian', 'Lực', 'Năng lượng', 'Công suất', 'Áp suất', 'Tốc độ']
const keyExtractor = (item, index) => index;
const ConvertTypes = (props) => {
    const { onChangeConvertType } = props;
    const [activeType, setActiveType] = useState(0);
    const refConvertTypeList = useRef();

    const onChangeType = (idx) => {
        setActiveType(idx);
        onChangeConvertType(convertTypes[idx])
        refConvertTypeList.current?.scrollToIndex({ index: idx, viewPosition: 0.5 });
    }

    const renderConvertType = ({ item, index }) => (
        <TypeItem
            item={item}
            index={index}
            activeType={activeType}
            onChangeType={onChangeType} />
    )

    return (
        <View style={styles.convert_types}>
            <FlatList
                horizontal
                ref={refConvertTypeList}
                data={convert_types}
                keyExtractor={keyExtractor}
                renderItem={renderConvertType}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ConvertTypes