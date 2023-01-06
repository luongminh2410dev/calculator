import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const ToolItem = (props) => {
    const { item, index } = props;
    const navigation = useNavigation();
    const onPress = () => {
        switch (index) {
            case 0:
                return navigation.navigate('DiscountCalculator');
            case 1:
                return navigation.navigate('SavingCalculator');
            case 2:
                return navigation.navigate('LoanCalculator');
            case 3:
                return navigation.navigate('TaxCalculator');
            case 4:
                return navigation.navigate('DiscountCalculator');
            case 5:
                return navigation.navigate('Currency');
            default:
                break;
        }
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Text>{item}</Text>
        </TouchableOpacity>
    )
}

const tools = ['Chiết khấu', 'Tiết kiệm', 'Tiền vay', 'Thuế TNCN', 'Tính lương BHXH', 'Tỉ giá tiền tệ'];
const keyExtractor = (item, index) => `tool_${index}`
const Finance = (props) => {
    const renderItem = ({ item, index }) => (
        <ToolItem item={item} index={index} />
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