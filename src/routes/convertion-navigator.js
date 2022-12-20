import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screenOptions } from '../options';
import Convertion from '../screens/convertion';

const Stack = createStackNavigator();
const ConvertionNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Convertion'
            screenOptions={screenOptions} >
            <Stack.Screen name='Convertion' component={Convertion} />
        </Stack.Navigator>
    );
}

export default ConvertionNavigator
