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
    }
})

export default styles;