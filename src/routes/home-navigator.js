import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screenOptions } from '../options';
import BasicCaculator from '../screens/basic-calculator';
import AdvanceCalculator from '../screens/advance-calculator';

const Stack = createStackNavigator();
const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='BasicCaculator'
            screenOptions={screenOptions} >
            <Stack.Screen name='BasicCaculator' component={BasicCaculator} />
            <Stack.Screen name='AdvanceCalculator' component={AdvanceCalculator} />
        </Stack.Navigator>
    );
}

export default HomeNavigator
