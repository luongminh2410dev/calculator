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