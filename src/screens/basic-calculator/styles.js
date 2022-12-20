import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Metrics.STATUS_BAR_HEIGHT,
        backgroundColor: Colors.BACKGROUND
    },
    display: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    list_result: {
        width: '100%',
    },
    buttons: {
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM
    },
    buttons_row: {
        width: '100%',
        flexDirection: "row",
        marginBottom: Metrics.LARGE_MARGIN_ITEM,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    button_item: {
        width: Metrics.DEVICE_WIDTH / 5.2,
        height: Metrics.DEVICE_WIDTH / 5.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#a0a0a0',
        borderRadius: 100,
        overflow: 'hidden',
    },
    button_number: {
        backgroundColor: '#313131'
    },
    button_func: {
        backgroundColor: '#f69906',
    },
    button_item_txt: {
        fontSize: 25,
        fontWeight: "600",
        color: Colors.BACKGROUND
    },
    button_number_txt: {
        color: Colors.WHITE
    }
})

export default styles;