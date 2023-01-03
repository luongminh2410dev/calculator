import React, { useRef } from 'react'
import { View } from 'react-native'
import ConvertTypes from './components/convert-types'
import ConvertView from './components/convert-view'
import ConvertKeyboad from './components/keyboard'
import UnitModal from './components/unit-modal'
import styles from './styles'

const Convertion = () => {
    const refConvertView = useRef();
    const refUnitModal = useRef();

    const onChangeConvertType = (type) => {
        refConvertView.current?.changeConvertType(type);
        refUnitModal.current?.setUnits(type);
    }

    const onKeyboardPress = (value) => {
        refConvertView.current?.keyboardPress(value);
    }

    const onSliceValue = () => {
        refConvertView.current?.sliceInputValue();
    }

    const handleShowUnitModal = (unit) => {
        refUnitModal.current?.show(unit);
    }

    const onUnitChange = (unit) => {
        refConvertView.current?.onUnitChange(unit);
    }

    return (
        <View style={styles.container}>
            <ConvertTypes onChangeConvertType={onChangeConvertType} />

            {/* AD BANNER */}
            {/* <View style={{ width: '100%', height: 60, backgroundColor: 'gray' }} /> */}

            <ConvertView
                ref={refConvertView}
                handleShowUnitModal={handleShowUnitModal} />

            <ConvertKeyboad
                onKeyboardPress={onKeyboardPress}
                onSliceValue={onSliceValue}
            />

            <UnitModal
                ref={refUnitModal}
                onUnitChange={onUnitChange} />
        </View>
    )
}

export default Convertion