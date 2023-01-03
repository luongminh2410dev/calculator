import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInLeft } from 'react-native-reanimated'
import { countryFlags } from '../../../../const'
import styles from './styles'

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
const CurrencyItem = (props) => {
    const { item, index, currentUnit } = props;

    const onPress = () => {

    }

    return (
        <AnimatedButton
            onPress={onPress}
            entering={FadeInLeft.duration(400).delay(index * 100)}
            style={styles.currency_item}>
            <View style={styles.currency_item_left}>
                <Image
                    defaultSource={require('../../../../assets/images/default.png')}
                    fadeDuration={0}
                    source={{ uri: countryFlags[item.name] }}
                    style={styles.currency_flag}></Image>
                <Text style={styles.currency_name}>{item.name}</Text>
            </View>
            <Text
                style={styles.currency_value}
                adjustsFontSizeToFit>{item.value.replace(/\d(?=(\d{3})+\.)/g, '$&,')} <Text style={styles.currency_value_unit}>{currentUnit.toUpperCase()}</Text>
            </Text>
        </AnimatedButton>
    )
}

export default CurrencyItem