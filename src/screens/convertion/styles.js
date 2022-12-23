import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
    },
    block: {
        width: '100%',
        marginTop: Metrics.LARGE_MARGIN_ITEM,
    },
})

export default styles;