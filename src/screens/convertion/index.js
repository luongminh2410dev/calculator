import React, { useRef } from 'react'
import { View } from 'react-native'
import ConvertTypes from './components/convert-types'
import ConvertView from './components/convert-view'
import ConvertKeyboad from './components/keyboard'
import styles from './styles'

const Convertion = () => {
    const refConvertView = useRef();

    const onChangeConvertType = (type) => {
        refConvertView.current?.changeConvertType(type)
    }

    const onKeyboardPress = (value) => {
        refConvertView.current?.keyboardPress(value);
    }

    const onSliceValue = () => {
        refConvertView.current?.sliceInputValue();
    }

    return (
        <View style={styles.container}>
            <ConvertTypes onChangeConvertType={onChangeConvertType} />

            {/* AD BANNER */}
            {/* <View style={{ width: '100%', height: 60, backgroundColor: 'gray' }} /> */}

            <ConvertView ref={refConvertView} />

            <ConvertKeyboad
                onKeyboardPress={onKeyboardPress}
                onSliceValue={onSliceValue}
            />
        </View>
    )
}

export default Convertion