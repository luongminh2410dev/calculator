import { StyleSheet } from "react-native";
import { Colors } from "../../../../utils";

const styles = StyleSheet.create({
    list_result: {
        flex: 1,
        width: '100%',
    },
    current_expr: {
        width: '100%',
        paddingVertical: 4,
        textAlign: 'right',
        fontSize: 40,
        color: Colors.WHITE
    },
    history_item: {
        color: Colors.GRAY,
        fontSize: 20
    }
})

export default styles;