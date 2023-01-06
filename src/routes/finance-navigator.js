import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screenOptions } from '../options';
import Currency from '../screens/currency';
import Finance from '../screens/finance';
import DiscountCalculator from '../screens/discount-calculator';
import SavingCalculator from '../screens/saving-calculator';
import LoanCalculator from '../screens/loan-calculator';
import TaxCalculator from '../screens/tax-calculator';

const Stack = createStackNavigator();
const FinanceNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Finance'
            screenOptions={screenOptions} >
            <Stack.Screen name='Finance' component={Finance} />
            <Stack.Screen name='Currency' component={Currency} />
            <Stack.Screen name='DiscountCalculator' component={DiscountCalculator} />
            <Stack.Screen name='SavingCalculator' component={SavingCalculator} />
            <Stack.Screen name='LoanCalculator' component={LoanCalculator} />
            <Stack.Screen name='TaxCalculator' component={TaxCalculator} />
        </Stack.Navigator>
    );
}

export default FinanceNavigator
