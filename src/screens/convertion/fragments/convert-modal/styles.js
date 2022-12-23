import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../../../utils";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: Metrics.DEVICE_HEIGHT * 0.25,
        bottom: 0,
        backgroundColor: Colors.WHITE,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    }
})

export default styles