import React from 'react'
import { Platform } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { Provider } from 'react-redux'
import AppNavigator from './routes'
import store from './store'

if (Platform.OS === 'ios') {
    AntDesign.loadFont();
    Feather.loadFont();
    Entypo.loadFont();
}

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}

export default App