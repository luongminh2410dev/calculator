import React from 'react'
import { Platform } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AppNavigator from './routes'

if (Platform.OS === 'ios') {
    AntDesign.loadFont();
    Feather.loadFont();
    Entypo.loadFont();
}

const App = () => {
    return (
        <AppNavigator />
    )
}

export default App