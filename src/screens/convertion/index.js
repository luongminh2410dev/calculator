import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'
import ConvertModal from './fragments/convert-modal'
import Currencies from './fragments/currencies'
import styles from './styles'

const Convertion = () => {
    const refConvertModal = useRef(null);
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}>
                <View style={styles.block}>
                    <Currencies />
                </View>
                <View style={styles.block}>

                </View>
            </ScrollView>
            <ConvertModal
                ref={refConvertModal}
            />
        </View>
    )
}

export default Convertion