import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../../utils'

const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
        width: '100%',
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
        marginTop: Metrics.LARGE_MARGIN_ITEM * 2,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: Metrics.LARGE_MARGIN_ITEM
    },
    key_btn: {
        width: Metrics.DEVICE_WIDTH / 3.5,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: 36,
    },
    key_btn_txt: {
        fontSize: 30,
        color: Colors.WHITE,
        fontWeight: '500'
    }
})

export default styles;