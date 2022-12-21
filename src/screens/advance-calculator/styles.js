import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND,
        flex: 1,
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM
    },
    header: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body: {
        flex: 1,
        width: '100%',
    },
    list_button: {
        paddingBottom: 10
    },
})

export default styles
