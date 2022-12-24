import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../../utils'

const styles = StyleSheet.create({
    currency_item: {
        width: '100%',
        flexDirection: "row",
        marginTop: Metrics.LARGE_MARGIN_ITEM,
        padding: Metrics.LARGE_MARGIN_ITEM,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        // backgroundColor: '#78add6',
        // backgroundColor: '#414141',
        backgroundColor: Colors.PRIMARY_COLOR
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
        fontSize: 16,
        textAlignVertical: "center"
    },
    currency_value_unit: {
        fontSize: 13,
        color: 'darkgray'
    }
})

export default styles;