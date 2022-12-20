import { StyleSheet } from 'react-native'
import { Metrics } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202328',
        flex: 1,
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM
    },
    header: {
        width: '100%',
        marginTop: Metrics.STATUS_BAR_HEIGHT + Metrics.NORMAL_MARGIN_ITEM,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body: {
        flex: 1,
        width: '100%',
    },
    list_button: {
        paddingBottom: 12
    },
})

export default styles
