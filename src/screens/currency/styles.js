import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        paddingTop: Metrics.LARGE_MARGIN_ITEM
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
    },
    title: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: "bold"
    },
    unit: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 24,
        backgroundColor: Colors.PRIMARY_COLOR
    },
    unit_txt: {
        fontSize: 13,
        color: Colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center"
    },
    content: {
        width: '100%',
        minHeight: Metrics.DEVICE_HEIGHT * 0.6,
        paddingBottom: 12,
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
    },
    loading: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles;