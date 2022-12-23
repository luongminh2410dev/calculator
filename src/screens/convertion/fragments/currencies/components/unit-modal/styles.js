import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../../../../utils'

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        alignItems: "center",
        margin: 0
    },
    modal_container: {
        width: '100%',
        height: Metrics.DEVICE_HEIGHT * 0.5,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        // paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
        backgroundColor: '#657c9c',
        overflow: 'hidden'
    },
    modal_close_btn: {
        position: 'absolute',
        right: Metrics.NORMAL_MARGIN_ITEM,
        top: Metrics.NORMAL_MARGIN_ITEM,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    currency_unit_view: {
        borderBottomWidth: 0.6,
        borderColor: Colors.BORDER_COLOR
    },
    currency_unit: {
        width: '100%',
        flexDirection: "row",
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    currency_unit_txt: {
        fontSize: 16,
        color: Colors.WHITE,
        marginLeft: 8
    }
})

export default styles;