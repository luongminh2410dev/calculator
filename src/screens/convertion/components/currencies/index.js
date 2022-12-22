import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { requestHttp } from '../../../../services';
import { Colors, Metrics, Storage } from '../../../../utils';
import { countryFlags, currencyUnits } from '../../../../utils/const';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather'

const CurrencyItem = (props) => {
    const { item, index } = props;
    return (
        <TouchableOpacity style={styles.currency_item}>
            <View style={styles.currency_item_left}>
                <Image
                    defaultSource={require('../../../../assets/default.png')}
                    fadeDuration={0}
                    source={{ uri: countryFlags[item.name] }}
                    style={styles.currency_flag}></Image>
                <Text style={styles.currency_name}>{item.name}</Text>
            </View>
            <Text style={styles.currency_value}>{item.value}</Text>
        </TouchableOpacity>
    )
}

const show_currencies = ['USD', 'EUR', 'SGD', 'RUB', 'JPY', 'CNY', 'HKD', 'THB', 'KRW', 'INR', 'AUD', 'CAD'];
const Currencies = () => {
    const [currentUnit, setCurrentUnit] = useState(() => {
        const getUnit = Storage.getString('currency_unit');
        if (getUnit) {
            return JSON.parse(getUnit)
        }
        return 'vnd'
    });
    const [currencies, setCurrencies] = useState([]);
    const [isVisible, setVisible] = useState(false);

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

    const onToggleUnitModal = () => {
        setVisible(!isVisible)
    }

    const handleCloseModal = () => setVisible(false);

    return (
        <>
            <View style={styles.block_header}>
                <Text style={styles.block_title}>Tiền tệ</Text>
                <TouchableOpacity
                    onPress={onToggleUnitModal}
                    style={styles.block_unit}>
                    <Text style={styles.block_unit_txt}>Đơn vị: {currentUnit.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.block_content}>
                {renderCurrencyList}
            </View>
            <Modal
                isVisible={isVisible}
                deviceWidth={Metrics.DEVICE_WIDTH}
                deviceHeight={Metrics.DEVICE_HEIGHT}
                style={styles.modal}
                useNativeDriver
                useNativeDriverForBackdrop
                onSwipeComplete={handleCloseModal}
                onBackdropPress={handleCloseModal}
            >
                <View style={styles.modal_container}>
                    <TouchableOpacity
                        onPress={handleCloseModal}
                        hitSlop={Metrics.HIT_SLOP}
                        style={styles.modal_close_btn}>
                        <Feather name='x' size={22} color={Colors.TEXT_COLOR} />
                    </TouchableOpacity>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        {currencyUnits.map((i, idx) => (
                            <Text key={idx}>{i}</Text>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </>
    )
}

export default Currencies