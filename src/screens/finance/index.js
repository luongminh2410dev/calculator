import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'

const tools = ['Chiết khấu', 'Tiết kiệm', 'Tiền vay', 'Thuế TNCN', 'Tính lương BHXH', 'Tỉ giá tiền tệ'];
const keyExtractor = (item, index) => `tool_${index}`
const Finance = () => {
    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <Text>{item}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={tools}
                numColumns={2}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={styles.content_container}
                style={styles.list_item}
            />
        </View>
    )
}

export default Finance