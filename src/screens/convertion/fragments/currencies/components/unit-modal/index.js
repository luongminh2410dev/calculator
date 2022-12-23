import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Feather from 'react-native-vector-icons/Feather'
import { Colors, Metrics } from '../../../../../../utils'
import { currencyUnits } from '../../../../../../utils/const'
import styles from './styles'

const CurrencyUnit = (props) => {
  const { item, index, currentUnit, setCurrentUnit, handleCloseModal } = props;
  const isActive = currentUnit == item.code?.toLowerCase();
  const onPress = () => {
    setCurrentUnit(item.code.toLowerCase());
    handleCloseModal()
  }
  return (
    <View style={styles.currency_unit_view}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.currency_unit}>
        {
          isActive && <Feather name='chevron-right' size={16} color='#78add6' />
        }
        <Text numberOfLines={1} style={[styles.currency_unit_txt, isActive && { color: '#78add6' }]}>{item.code} - {item.currency}</Text>
      </TouchableOpacity>
    </View>
  )
}

const UnitModal = forwardRef((props, ref) => {
  const { currentUnit, setCurrentUnit } = props;
  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true)
  }))

  const handleCloseModal = () => setVisible(false);

  const renderCurrencyUnits = currencyUnits.map((i, idx) => (
    <CurrencyUnit
      item={i}
      key={idx}
      index={idx}
      currentUnit={currentUnit}
      setCurrentUnit={setCurrentUnit}
      handleCloseModal={handleCloseModal} />
  ))

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      deviceWidth={Metrics.DEVICE_WIDTH}
      deviceHeight={Metrics.DEVICE_HEIGHT}
      style={styles.modal}
      useNativeDriver
      useNativeDriverForBackdrop
      onSwipeComplete={handleCloseModal}
      onBackdropPress={handleCloseModal}
    >
      <View style={styles.modal_container}>
        <TouchableOpacity
          onPress={handleCloseModal}
          hitSlop={Metrics.HIT_SLOP}
          style={styles.modal_close_btn}>
          <Feather name='x' size={22} color={Colors.WHITE} />
        </TouchableOpacity>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {renderCurrencyUnits}
        </ScrollView>
      </View>
    </Modal>
  )
})

export default UnitModal