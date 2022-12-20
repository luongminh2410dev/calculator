import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../../utils'

const styles = StyleSheet.create({
    functions: {
        width: '100%'
    },
    actions: {
        width: '100%'
    },
    row: {
        flexDirection: "row",
        marginVertical: 10,
    },
    // FUNCTION ITEM
    func_item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    func_btn: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: Metrics.DEVICE_WIDTH / 7,
        maxHeight: 36,
        height: Metrics.DEVICE_HEIGHT / 22,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#71777c',
        backgroundColor: '#34383c',
    },
    shift_hint: {
        position: 'absolute',
        top: -20
    },
    shift_hint_txt: {
        fontSize: 14,
        color: '#7e996b',
        fontWeight: '600'
    },
    func_txt: {
        color: Colors.WHITE,
        fontWeight: '600',
        fontSize: 15,
        textAlignVertical: 'center',
    },
    shift_btn: {
        backgroundColor: '#a2cc8a',
        borderColor: '#c6f0b0',
    },
    alpha_btn: {
        backgroundColor: '#a4d4ee',
        borderColor: '#d6e9f7'
    },
    special_func_text: {
        color: Colors.TEXT_COLOR,
        fontSize: Math.floor(Metrics.DEVICE_WIDTH / 26)
    },
    // ACTION ITEM
    action_item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_btn: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: Metrics.DEVICE_WIDTH / 6,
        height: Metrics.DEVICE_HEIGHT / 20,
        maxHeight: 42,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#a7afc1',
        backgroundColor: '#818899',
    },
    special_action_btn: {
        backgroundColor: '#dee2e6',
        borderColor: '#fbfafd'
    },
    alpha_hint: {
        position: 'absolute',
        top: -20
    },
    alpha_hint_txt: {
        fontSize: 14,
        color: '#65a8ca',
        fontWeight: '600'
    },
    action_txt: {
        color: '#dee3e6',
        fontWeight: 'bold',
        fontSize: 22,
        // marginTop: Platform.select({
        //     ios: 0,
        //     android: - (22 * 0.1)
        // }),
        textAlignVertical: 'center',
    },
    special_action_txt: {
        color: Colors.TEXT_COLOR
    },
})

export default styles
