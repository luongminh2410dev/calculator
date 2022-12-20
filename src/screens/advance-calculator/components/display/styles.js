import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../../utils'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        minHeight: 80,
        maxHeight: 240,
        marginTop: Metrics.LARGE_MARGIN_ITEM,
        justifyContent: "center",
        marginBottom: Metrics.LARGE_MARGIN_ITEM
    },
    display_container: {
        flex: 1,
        backgroundColor: '#b3beb3',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    tool_bar: {
        width: '100%',
        flexDirection: 'row'
    },
    tool_item: {
        fontSize: 9,
        marginRight: 8,
        fontWeight: 'bold',
        color: Colors.TEXT_COLOR
    },
    expression: {
        color: Colors.TEXT_COLOR,
        padding: 0,
        margin: 0,
        fontSize: 24,
    },
    result: {
        width: '100%',
        color: Colors.TEXT_COLOR,
        textAlign: 'right',
        fontSize: 22,
    },
})

export default styles
