import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../utils'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
        paddingVertical: Metrics.LARGE_MARGIN_ITEM,
        backgroundColor: 'rgba(32,35,40,0.98)'
    },
    header_left: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center'
    },
    back_btn: {
        padding: Metrics.NORMAL_MARGIN_ITEM,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 12,
        justifyContent: "center",
        alignItems: 'center',
        marginRight: Metrics.LARGE_MARGIN_ITEM
    },
    title: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: "bold"
    },
})

export default styles;