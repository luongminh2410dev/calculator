import { INIT_CURRECY_DATA, UPDATE_CURRENCY_RATIO, UPDATE_CURRENCY_UNIT } from './types';

export const initCurrencyData = data => ({
    type: INIT_CURRECY_DATA,
    data
})
export const updateCurrencyRatio = data => ({
    type: UPDATE_CURRENCY_RATIO,
    data
})
export const updateCurrencyUnit = data => ({
    type: UPDATE_CURRENCY_UNIT,
    data
})