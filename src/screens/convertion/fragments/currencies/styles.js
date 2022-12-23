import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../../utils'

const styles = StyleSheet.create({
    block_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
    },
    block_title: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: "bold"
    },
    block_unit: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 24,
        backgroundColor: Colors.PRIMARY_COLOR
    },
    block_unit_txt: {
        fontSize: 13,
        color: Colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center"
    },
    block_content: {
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