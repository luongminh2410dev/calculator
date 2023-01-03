import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screenOptions } from '../options';
import Currency from '../screens/currency';
import Finance from '../screens/finance';

const Stack = createStackNavigator();
const FinanceNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Finance'
            screenOptions={screenOptions} >
            <Stack.Screen name='Finance' component={Finance} />
            <Stack.Screen name='Currency' component={Currency} />
        </Stack.Navigator>
    );
}

export default FinanceNavigator
