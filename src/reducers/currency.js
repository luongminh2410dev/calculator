import { INIT_CURRECY_DATA, UPDATE_CURRENCY_RATIO, UPDATE_CURRENCY_UNIT } from '../actions/types';
import { defaultCurrency } from '../const';
import { Storage } from '../utils';

const saveDataToStorage = (data) => {
    try {
        Storage.set('currency_data', JSON.stringify(data));
    }
    catch {
        console.log('ERROR')
    }
}

// const DEFAULT_STATE = {
//     updateTime: 0,
//     unit: 'eur',
//     ratio: { ...defaultCurrency }
// }

export default (state = null, { type, data }) => {
    switch (type) {
        case INIT_CURRECY_DATA:
            return data;
        case UPDATE_CURRENCY_RATIO:
            const ratioFormated = {};
            Object.keys(defaultCurrency).map(item => {
                ratioFormated[item] = {
                    code: item,
                    name: defaultCurrency[item].name,
                    value: data[item.toLowerCase()]
                }
                return;
            })
            const updateRatio = { ...state, ratio: ratioFormated, updateTime: Date.now() };
            saveDataToStorage(updateRatio);
            return updateRatio;
        case UPDATE_CURRENCY_UNIT:
            const updateUnit = { ...state, unit: data };
            saveDataToStorage(updateUnit);
            return updateUnit;
        default:
            return state;
    }
}