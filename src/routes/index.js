import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Platform, StatusBar, StyleSheet, UIManager, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Feather from 'react-native-vector-icons/Feather';
import ConvertionNavigator from './convertion-navigator';
import FinanceNavigator from './finance-navigator';
import HomeNavigator from './home-navigator';
import SettingNavigator from './setting-navigator';

enableScreens();
const Tab = createBottomTabNavigator();
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const activeTintColor = 'white';
const AppNavigator = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
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
    }
})

export default AppNavigator
