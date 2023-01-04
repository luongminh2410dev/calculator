import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../utils'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND
    },
    content_container: {
        paddingTop: Metrics.LARGE_MARGIN_ITEM,
    },
    list_item: {
        paddingRight: Metrics.LARGE_MARGIN_ITEM
    },
    item: {
        flex: 1,
        height: 140,
        marginLeft: Metrics.LARGE_MARGIN_ITEM,
        marginBottom: Metrics.LARGE_MARGIN_ITEM,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'red',
    }
})

export default styles;