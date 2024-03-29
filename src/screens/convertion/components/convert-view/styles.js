import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../../utils'

const REVERT_SIZE = Metrics.isSmallScreen ? 45 : 60;
const COVERT_BOX_SIZE = Metrics.isSmallScreen ? 85 : 105;
const styles = StyleSheet.create({
    covert_view: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        marginTop: Metrics.LARGE_MARGIN_ITEM,
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM,
    },
    convert_box: {
        marginBottom: Metrics.LARGE_MARGIN_ITEM,
        width: '100%',
        height: COVERT_BOX_SIZE,
        justifyContent: 'space-between',
        paddingVertical: Metrics.LARGE_MARGIN_ITEM,
        paddingHorizontal: Metrics.LARGE_MARGIN_ITEM * 2,
        paddingBottom: REVERT_SIZE / 2,
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: 24,
    },
    convert_box_2: {
        backgroundColor: Colors.WHITE,
    },
    convert_box_title: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.BACKGROUND,
        marginBottom: Metrics.NORMAL_MARGIN_ITEM
    },
    convert_box_info: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    covert_value_btn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    convert_box_txt: {
        fontSize: 20,
        fontWeight: "600",
        color: Colors.BACKGROUND,
    },
    revert_view: {
        position: 'absolute',
        width: REVERT_SIZE,
        height: REVERT_SIZE,
        borderRadius: REVERT_SIZE,
        top: COVERT_BOX_SIZE,
        left: (Metrics.DEVICE_WIDTH / 2) - REVERT_SIZE / 2,
        backgroundColor: Colors.BACKGROUND,
        overflow: 'hidden'
    },
    revert_btn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        transform: [
            { rotateZ: '45deg' }
        ],
        backgroundColor: Colors.BACKGROUND,
    },
})

export default styles;