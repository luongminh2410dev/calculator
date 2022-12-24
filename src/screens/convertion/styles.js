import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        paddingTop: Metrics.STATUS_BAR_HEIGHT,
    },
})

export default styles;