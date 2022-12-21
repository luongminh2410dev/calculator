import React from 'react'
import { ScrollView, View } from 'react-native'
import Currencies from './components/currencies'
import styles from './styles'

const Convertion = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.block}>
                <Currencies />
            </View>
            <View style={styles.block}>
                <Currencies />
            </View>
        </ScrollView>
    )
}

export default Convertion