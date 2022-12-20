import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screenOptions } from '../options';
import Caculator from '../screens/caculator';

const Stack = createStackNavigator();
const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName='Bootsplash'
            screenOptions={screenOptions} >
            <Stack.Screen name='Bootsplash' component={Caculator} />
        </Stack.Navigator>
    );
}

export default HomeNavigator
