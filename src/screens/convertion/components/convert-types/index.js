import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import styles from './styles';
import { Colors } from '../../../../utils';

const TypeItem = (props) => {
    const { item, index, activeType, setActiveType } = props;
    const isActive = activeType == index;
    const onPress = () => {
        setActiveType(index);
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.type_item}
        >
            <Text style={[styles.type_item_txt, isActive && { color: Colors.PRIMARY_COLOR }]}>{item}</Text>
        </TouchableOpacity>
    )
}

const convert_type = ['Tiền tệ', 'Độ dài', 'Khối lượng', 'Diện tích', 'Thể tích', 'Thời gian', 'Nhiệt độ', 'Năng lượng', 'Công suất', 'Áp suất', 'Tốc độ']
const keyExtractor = (item, index) => index;
const ConvertTypes = () => {
    const [activeType, setActiveType] = useState(0);
    const refConvertTypeList = useRef();
    useEffect(() => {
        refConvertTypeList.current?.scrollToIndex({ index: activeType, viewPosition: 0.5 })
    }, [activeType])

    const renderConvertType = ({ item, index }) => (
        <TypeItem
            item={item}
            index={index}
            activeType={activeType}
            setActiveType={setActiveType} />
    )

    return (
        <View style={styles.convert_types}>
            <FlatList
                horizontal
                ref={refConvertTypeList}
                data={convert_type}
                keyExtractor={keyExtractor}
                renderItem={renderConvertType}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ConvertTypes