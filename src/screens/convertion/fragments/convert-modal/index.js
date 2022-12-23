import { View, Text } from 'react-native'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'
import styles from './styles'

const ConvertModal = forwardRef((props, ref) => {
    const [isVisible, setVisible] = useState(true);

    useImperativeHandle(ref, () => ({
        show: (value) => {
            setVisible(true);
            console.log(value);
        }
    }))

    if (!isVisible) return null;
    return (
        <Animated.View
            entering={FadeInDown}
            exiting={FadeOutDown}
            style={styles.container}>
        </Animated.View>
    )
})

export default ConvertModal