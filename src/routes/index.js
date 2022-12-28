import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, UIManager, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { initCurrencyData, updateCurrencyRatio } from '../actions/currency';
import { defaultCurrency } from '../const';
import { requestHttp } from '../services';
import { Colors, Metrics, Storage } from '../utils';
import ConvertionNavigator from './convertion-navigator';
import FinanceNavigator from './finance-navigator';
import HomeNavigator from './home-navigator';
import SettingNavigator from './setting-navigator';

enableScreens();
const Tab = createBottomTabNavigator();
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const defaultCurrencyData = {
    updateTime: 0,
    unit: 'eur',
    ratio: { ...defaultCurrency }
}
const activeTintColor = 'white';
const AppNavigator = (props) => {
    const { initCurrencyData, updateCurrencyRatio } = props;

    useEffect(() => {
        _initCurrencyData();
    }, [])

    const _initCurrencyData = async () => {
        const getDataFromStorage = Storage.getString('currency_data');
        const data = getDataFromStorage ? JSON.parse(getDataFromStorage) : defaultCurrencyData;
        initCurrencyData(data);
        if (Date.now() - data.updateTime > 1000 * 60 * 60 * 24) {
            const result = await requestHttp(
                `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${data.unit}.min.json`,
                'GET'
            )
            if (result) {
                updateCurrencyRatio(result[data.unit])
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.BACKGROUND} barStyle='light-content' />
            {
                Platform.OS === 'ios' &&
                <View style={styles.status_bar_view} />
            }
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="HomeNavigator"
                    screenOptions={{
                        headerShown: false,
                        tabBarHideOnKeyboard: true,
                        tabBarStyle: styles.tab_bar,
                        tabBarItemStyle: styles.tab_bar_item,
                        tabBarLabelStyle: styles.tab_bar_label,
                        tabBarActiveTintColor: activeTintColor
                    }}>
                    <Tab.Screen
                        name="HomeNavigator"
                        component={HomeNavigator}
                        options={{
                            tabBarLabel: 'Máy tính',
                            tabBarIcon: ({ focused, color }) => (
                                <Feather name='grid' size={15} color={color} />
                            ),
                        }} />
                    <Tab.Screen
                        name="FinanceNavigator"
                        component={FinanceNavigator}
                        options={{
                            tabBarLabel: 'Tài chính',
                            tabBarIcon: ({ focused, color }) => (
                                <Feather name='pie-chart' size={15} color={color} />
                            ),
                        }} />
                    <Tab.Screen
                        name="ConvertionNavigator"
                        component={ConvertionNavigator}
                        options={{
                            tabBarLabel: 'Chuyển đổi',
                            tabBarIcon: ({ focused, color }) => (
                                <Feather name='refresh-cw' size={15} color={color} />
                            ),
                        }} />
                    <Tab.Screen
                        name="SettingNavigator"
                        component={SettingNavigator}
                        options={{
                            tabBarLabel: 'Cài đặt',
                            tabBarIcon: ({ focused, color }) => (
                                <Feather name='settings' size={15} color={color} />
                            ),
                        }} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    tab_bar: {
        width: '100%',
        borderTopWidth: 0,
        backgroundColor: '#141619'
    },
    tab_bar_item: {
        margin: 0,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab_bar_label: {
        padding: 0,
        margin: 0,
        fontSize: 12,
    },
    status_bar_view: {
        height: Metrics.STATUS_BAR_HEIGHT,
        backgroundColor: Colors.BACKGROUND
    }
})

export default connect(null, { initCurrencyData, updateCurrencyRatio })(AppNavigator)
