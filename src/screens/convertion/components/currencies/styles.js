import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../../utils'

const styles = StyleSheet.create({
    block_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
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
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.WHITESMOKE
    },
    block_unit_txt: {
        fontSize: 13,
        color: Colors.WHITE,
    },
    block_content: {
        width: '100%',
        paddingBottom: 12,
    },
    currency_item: {
        width: '100%',
        flexDirection: "row",
        marginTop: Metrics.LARGE_MARGIN_ITEM,
        padding: Metrics.LARGE_MARGIN_ITEM,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        // backgroundColor: '#78add6',
        backgroundColor: '#414141',
        // backgroundColor: '#657c9c'
    },
    currency_item_left: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    currency_flag: {
        width: 40,
        borderRadius: 2,
        marginRight: 8,
        aspectRatio: 1.5,
    },
    currency_name: {
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: Colors.WHITE
    },
    currency_value: {
        color: Colors.GREY,
        fontSize: 16
    },
    modal: {
        justifyContent: 'flex-end',
        alignItems: "center",
        margin: 0
    },
    modal_container: {
        width: '100%',
        height: Metrics.DEVICE_HEIGHT * 0.4,
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: Metrics.LARGE_MARGIN_ITEM
    },
    modal_close_btn: {
        position: 'absolute',
        right: Metrics.NORMAL_MARGIN_ITEM,
        top: Metrics.NORMAL_MARGIN_ITEM,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    }
})

export default styles;