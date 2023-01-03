import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
    },
    content_container: {
        paddingBottom: Metrics.LARGE_MARGIN_ITEM,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
        paddingBottom: Metrics.LARGE_MARGIN_ITEM,
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
    unit: {
        marginTop: 4,
        justifyContent: 'center',
        alignItems: "center",
    },
    unit_txt: {
        fontSize: 15,
        color: Colors.GRAY,
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center"
    },
    content: {
        width: '100%',
        minHeight: Metrics.DEVICE_HEIGHT * 0.6,
        marginBottom: Metrics.LARGE_MARGIN_ITEM,
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
    },
    loading: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles;