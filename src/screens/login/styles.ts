import {StyleSheet} from "react-native"
import { scale } from "../../common/utils"
import colors from "../../common/colors"

export default StyleSheet.create({
    container: {
        justifyContent:'center'
    },
    input: {
        borderColor: 'gray',
        borderWidth: scale(1),
        marginBottom: scale(10),
        paddingHorizontal: scale(10),
        borderRadius: scale(5),
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: scale(10),
        alignItems: 'center',
        borderRadius: scale(5),
    },
    disable:{
        opacity: 0.5
    },
    buttonText: {
        color: colors.white,
        fontSize: scale(16),
        fontWeight: 'bold'
    },
    warningText: {
        color: 'red',
        marginBottom: scale(10),
        fontSize: scale(10)
    }
})