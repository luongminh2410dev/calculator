import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import Feather from 'react-native-vector-icons/Feather'
import { convertRatio } from '../../../../const'
import { Colors, Metrics } from '../../../../utils'
import styles from './styles'

const CurrencyUnit = (props) => {
  const { item, index, itemData, currentUnit, _onSelected } = props;
  const isActive = currentUnit == itemData.code;

  const onPress = () => {
    _onSelected(item);
  }

  return (
    <View style={styles.currency_unit_view}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.currency_unit}>
        {
          isActive && <Feather name='chevron-right' size={16} color='#78add6' />
        }
        <Text numberOfLines={1} style={[styles.currency_unit_txt, isActive && { color: '#78add6' }]}>{itemData.code} - {itemData.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const keyExtractor = (item, index) => `unit_${index}`
const UnitModal = forwardRef((props, ref) => {
  const { onUnitChange } = props;
  const [data, setData] = useState(convertRatio['currency']);
  const [currentUnit, setCurrentUnit] = useState('');
  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: (unit) => {
      setCurrentUnit(unit);
      setVisible(true);
    },
    setUnits: (type) => {
      return setData(convertRatio[type])
    }
  }))

  const _onSelected = (item) => {
    onUnitChange(item);
    setVisible(false);
  }

  const handleCloseModal = () => setVisible(false);

  const renderUnitItem = ({ item, index }) => (
    <CurrencyUnit
      item={item}
      itemData={data[item]}
      index={index}
      currentUnit={currentUnit}
      _onSelected={_onSelected}
    />
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
          data={Object.keys(data)}
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