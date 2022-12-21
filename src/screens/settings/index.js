import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'

const Settings = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>Settings</Text>
            </View>
        </ScrollView>
    )
}

export default Settings