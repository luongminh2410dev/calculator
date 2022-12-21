import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { requestHttp } from '../../../../services';
import { countryFlags } from '../../../../utils/const';
import styles from './styles';

const CurrencyItem = (props) => {
    const { item, index } = props;
    return (
        <View style={styles.currency_item}>
            <View style={styles.currency_item_left}>
                <Image
                    source={{ uri: countryFlags[item.name] }}
                    style={styles.currency_flag}></Image>
                <Text style={styles.currency_name}>{item.name}</Text>
            </View>
            <Text style={styles.currency_value}>{item.value}</Text>
        </View>
    )
}

const show_currencies = ['USD', 'EUR', 'SGD', 'RUB', 'JPY', 'THB', 'KRW', 'INR'];
const Currencies = () => {
    const [currentUnit, setCurrentUnit] = useState('vnd');
    const [currencies, setCurrencies] = useState([]);

    const renderCurrencyList = currencies.map((i, idx) => (
        <CurrencyItem item={i} index={idx} key={idx} />
    ))

    useEffect(() => {
        _initCurrencies();
    }, [])

    const _initCurrencies = async () => {
        const result = await requestHttp(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currentUnit}.json`,
            'GET'
        )
        if (result) {
            const newCurrentcies = show_currencies.map(i => {
                return { name: i, value: (1 / result[currentUnit][i.toLowerCase()]).toFixed(2) }
            })
            setCurrencies(newCurrentcies);
        }
    }
    return (
        <>
            <View style={styles.block_header}>
                <Text style={styles.block_title}>Tiền tệ</Text>
                <TouchableOpacity style={styles.block_unit}>
                    <Text style={styles.block_unit_txt}>Đơn vị: {currentUnit.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.block_content}>
                {renderCurrencyList}
            </View>
        </>
    )
}

export default Currencies