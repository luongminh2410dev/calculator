import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Feather from 'react-native-vector-icons/Feather'
import { currencyUnits } from '../../../../const'
import { Colors, Metrics } from '../../../../utils'
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

const keyExtractor = (item, index) => `unit_${index}`
const UnitModal = forwardRef((props, ref) => {
  const { currentUnit, setCurrentUnit } = props;
  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true)
  }))

  const handleCloseModal = () => setVisible(false);

  const renderUnitItem = ({ item, index }) => (
    <CurrencyUnit
      item={item}
      index={index}
      currentUnit={currentUnit}
      setCurrentUnit={setCurrentUnit}
      handleCloseModal={handleCloseModal} />
  )

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
        <FlatList
          data={currencyUnits}
          keyExtractor={keyExtractor}
          renderItem={renderUnitItem}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={50}
          initialNumToRender={30}
          windowSize={50}
          removeClippedSubviews
          contentContainerStyle={{ paddingVertical: 12 }}
        />
      </View>
    </Modal>
  )
})

export default UnitModal