import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screenOptions } from '../options';
import Settings from '../screens/settings';

const Stack = createStackNavigator();
const SettingNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Settings'
            screenOptions={screenOptions} >
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    );
}

export default SettingNavigator
