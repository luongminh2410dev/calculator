import { createSelector } from 'reselect';

const getCurrency = state => state.currency;
const getCurrencySelector = createSelector(getCurrency, currency => currency);

export {
    getCurrencySelector,
}