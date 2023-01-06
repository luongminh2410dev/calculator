import React from 'react'
import { View } from 'react-native'
import HeaderBar from '../../components/header-bar'
import styles from './styles'

const TaxCalculator = () => {
    return (
        <View style={styles.container}>
            <HeaderBar title='Thuế TNCN' />
            <View style={styles.body}>

            </View>
        </View>
    )
}

export default TaxCalculator