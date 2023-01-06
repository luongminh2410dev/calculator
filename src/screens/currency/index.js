import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { getCurrencySelector } from '../../redux-selector';
import { requestHttp } from '../../services';
import CurrencyItem from './components/currency-item';
import UnitModal from './components/unit-modal';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather'
import { Metrics } from '../../utils';
import HeaderBar from '../../components/header-bar'

const show_currencies = ['USD', 'EUR', 'SGD', 'RUB', 'JPY', 'CNY', 'HKD', 'THB', 'KRW', 'INR', 'AUD', 'CAD'];
const Currency = (props) => {
    const { currency, navigation } = props;
    const [currentUnit, setCurrentUnit] = useState(currency.unit);
    const [currencies, setCurrencies] = useState([]);

    const refUnitModal = useRef(null);

    const _renderCurrencyItem = (i, idx) => (
        <CurrencyItem item={i} index={idx} key={idx} currentUnit={currentUnit} />
    )

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

    const handleGoBack = () => {
        navigation.goBack()
    }

    const customRightButton = () => (
        <TouchableOpacity
            onPress={onToggleUnitModal}
            hitSlop={Metrics.HIT_SLOP}
            style={styles.unit}>
            <Text style={styles.unit_txt}>{currentUnit.toUpperCase()}<Entypo name='chevron-down' size={14} color='gray' /></Text>
        </TouchableOpacity>
    )

    return (
        <ScrollView
            style={styles.container}
            stickyHeaderIndices={[0]}
            contentContainerStyle={styles.content_container}
            showsVerticalScrollIndicator={false}>
            <HeaderBar title='Tiền tệ' customRightButton={customRightButton} />
            <View style={styles.content}>
                {
                    currencies.length == 0 ?
                        <View style={styles.loading}>
                            <ActivityIndicator size='large' color='#78add6' />
                        </View>
                        :
                        currencies.map(_renderCurrencyItem)
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