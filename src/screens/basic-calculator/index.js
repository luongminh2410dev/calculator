import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

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
            </View>
        </View>
    )
}

export default BasicCalculator