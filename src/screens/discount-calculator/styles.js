import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../utils'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND
    },
    body: {
        flex: 1,
    },
    row: {
        width: '100%',
        flexDirection: "row",
        paddingLeft: Metrics.LARGE_MARGIN_ITEM,
        marginTop: Metrics.LARGE_MARGIN_ITEM
    },
    input_view: {
        flex: 1,
        marginRight: Metrics.LARGE_MARGIN_ITEM
    },
    input_label: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.WHITE
    },
    input_item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Metrics.LARGE_MARGIN_ITEM / 2,
        backgroundColor: Colors.WHITE,
        borderRadius: 12,
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
        fontSize: 16,
        overflow: 'hidden'
    },
    text_input: {
        fontSize: 16,
    },
    input_unit: {
        fontSize: 16,
    }
})

export default styles;