import React, { useEffect, useRef } from 'react'
import { View, Text, Keyboard } from 'react-native'
import HeaderBar from '../../components/header-bar'
import styles from './styles'
import NumberKeyboard from '../../components/keyboard'
import InputItem from '../../components/input-item'

// NON_DISCOUNT_PRICE = (BASE_PRICE + BASE_PRICE * VAT_PERCENT);
// DISCOUNT_PRICE = NON_DISCOUNT_PRICE * DISCOUNT_PERCENT;
// FINAL_PRICE = NON_DISCOUNT_PRICE - DISCOUNT_PRICE;

const DiscountCalculator = () => {
    const refInputFocused = useRef(-1);
    const refVATInput = useRef();
    const refDiscountInput = useRef();
    const refBasePriceInput = useRef();
    const refDiscountPriceInput = useRef();
    const refFinalPriceInput = useRef();

    const onKeyboardPress = (value) => {
        switch (refInputFocused.current) {
            case 0:
                const vatValue = refVATInput.current.getValue();
                refVATInput.current.setValue(`${vatValue}${value}`);
                break;
            case 1:
                const discountValue = refDiscountInput.current.getValue();
                refDiscountInput.current.setValue(`${discountValue}${value}`);
                break;
            case 2:
                const basePriceValue = refBasePriceInput.current.getValue();
                refBasePriceInput.current.setValue(`${basePriceValue}${value}`);
                break;
            case 3:
                const discountPriceValue = refDiscountPriceInput.current.getValue();
                refDiscountPriceInput.current.setValue(`${discountPriceValue}${value}`);
                break;
            case 4:
                const finallPriceValue = refFinalPriceInput.current.getValue();
                refFinalPriceInput.current.setValue(`${finallPriceValue}${value}`);
                break;
            default:
                break;
        }
    }

    const onSliceValue = () => {
        switch (refInputFocused.current) {
            case 0:
                const vatCharts = refVATInput.current.getValue().split('');
                vatCharts.pop();
                refVATInput.current.setValue(vatCharts.join(''));
                break;
            case 1:
                const discountCharts = refDiscountInput.current.getValue().split('');
                discountCharts.pop();
                refDiscountInput.current.setValue(discountCharts.join(''));
                break;
            case 2:
                const basePriceCharts = refBasePriceInput.current.getValue().split('');
                basePriceCharts.pop();
                refBasePriceInput.current.setValue(basePriceCharts.join(''));
                break;
            case 3:
                const discountPriceCharts = refDiscountPriceInput.current.getValue().split('');
                discountPriceCharts.pop();
                refDiscountPriceInput.current.setValue(discountPriceCharts.join(''));
                break;
            case 4:
                const finallPriceCharts = refFinalPriceInput.current.getValue().split('');
                finallPriceCharts.pop();
                refFinalPriceInput.current.setValue(finallPriceCharts.join(''));
                break;
            default:
                break;
        }
        // refConvertView.current?.sliceInputValue();
    }

    const onAnyInputChange = (e) => {
        console.log(e);
        console.log('change', refInputFocused.current);
        const vatValue = refVATInput.current.getValue();
        const discountValue = refDiscountInput.current.getValue();
        const basePriceValue = refBasePriceInput.current.getValue();
        const discountPriceValue = refDiscountPriceInput.current.getValue();
        const finalPriceValue = refFinalPriceInput.current.getValue();

        if (vatValue == '' || discountValue == '' || basePriceValue == '')

            if (refInputFocused.current != 4) {
                // const newValue = 
            }
    }

    return (
        <View style={styles.container}>
            <HeaderBar title='Chiết khấu' />
            {/* AD BANNER */}
            <View style={{ width: '100%', height: 60, backgroundColor: 'gray' }} />
            <View style={styles.body}>
                <View style={styles.row}>
                    <View style={styles.input_view}>
                        <Text style={styles.input_label}>Thuế GTGT</Text>
                        <View style={styles.input_item}>
                            <InputItem
                                ref={refVATInput}
                                focusable
                                initialValue={"10"}
                                onChange={onAnyInputChange}
                                onFocus={() => refInputFocused.current = 0}
                                style={styles.text_input}
                            />
                            <Text style={styles.input_unit}>%</Text>
                        </View>
                    </View>
                    <View style={styles.input_view}>
                        <Text style={styles.input_label}>Giảm giá (%)</Text>
                        <View style={styles.input_item}>
                            <InputItem
                                ref={refDiscountInput}
                                initialValue={"10"}
                                onChange={onAnyInputChange}
                                onFocus={() => refInputFocused.current = 0}
                                style={styles.text_input}
                            />
                            <Text style={styles.input_unit}>%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.input_view}>
                        <Text style={styles.input_label}>Giá gốc</Text>
                        <InputItem
                            ref={refBasePriceInput}
                            onChange={onAnyInputChange}
                            onFocus={() => refInputFocused.current = 2}
                            style={styles.input_item} />
                    </View>
                    <View style={styles.input_view}>
                        <Text style={styles.input_label}>Giá đã giảm</Text>
                        <InputItem
                            ref={refDiscountPriceInput}
                            onChange={onAnyInputChange}
                            onFocus={() => refInputFocused.current = 3}
                            style={styles.input_item} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.input_view}>
                        <Text style={styles.input_label}>Giá cuối cùng</Text>
                        <InputItem
                            ref={refFinalPriceInput}
                            onChange={onAnyInputChange}
                            onFocus={() => refInputFocused.current = 4}
                            style={styles.input_item} />
                    </View>
                </View>
                <NumberKeyboard
                    onKeyboardPress={onKeyboardPress}
                    onSliceValue={onSliceValue}
                />
            </View>
        </View>
    )
}

export default DiscountCalculator