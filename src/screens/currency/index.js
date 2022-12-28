import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { getCurrencySelector } from '../../redux-selector';
import { requestHttp } from '../../services';
import CurrencyItem from './components/currency-item';
import UnitModal from './components/unit-modal';
import styles from './styles';

const show_currencies = ['USD', 'EUR', 'SGD', 'RUB', 'JPY', 'CNY', 'HKD', 'THB', 'KRW', 'INR', 'AUD', 'CAD'];
const Currency = (props) => {
    const { currency } = props;
    const [currentUnit, setCurrentUnit] = useState(currency.unit);
    const [currencies, setCurrencies] = useState([]);

    const refUnitModal = useRef(null);

    const renderCurrencyList = currencies.map((i, idx) => (
        <CurrencyItem item={i} index={idx} key={idx} currentUnit={currentUnit} />
    ))

    useEffect(() => {
        if (currentUnit == currency.unit) {
            setCurrencies(show_currencies.map(i => {
                return { name: i, value: (1 / currency.ratio[i].value).toFixed(2) }
            }))
        } else {
            updateCurrencies();
        }
    }, [currentUnit])

    const updateCurrencies = async () => {
        setCurrencies([]);
        const result = await requestHttp(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currentUnit.toLowerCase()}.min.json`,
            'GET'
        )
        if (result) {
            const newCurrentcies = show_currencies.map(i => {
                return { name: i, value: (1 / result[currentUnit][i.toLowerCase()]).toFixed(2) }
            })
            setCurrencies(newCurrentcies);
        }
    }

    const onToggleUnitModal = () => {
        refUnitModal.current?.show();
    }

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.title}>Tiền tệ</Text>
                <TouchableOpacity
                    onPress={onToggleUnitModal}
                    style={styles.unit}>
                    <Text style={styles.unit_txt}>Đơn vị <Entypo name='chevron-down' size={14} color='white' /></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {
                    currencies.length == 0 ?
                        <View style={styles.loading}>
                            <ActivityIndicator size='large' color='#78add6' />
                        </View>
                        :
                        renderCurrencyList
                }
            </View>
            <UnitModal
                ref={refUnitModal}
                currentUnit={currentUnit}
                setCurrentUnit={setCurrentUnit} />
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        currency: getCurrencySelector(state)
    }
}
export default connect(mapStateToProps, null)(Currency)