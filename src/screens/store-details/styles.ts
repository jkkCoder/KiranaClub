import { StyleSheet } from "react-native";
import { scale } from "../../common/utils";
import colors from "../../common/colors";

export default StyleSheet.create({
    btn: {
        backgroundColor: 'blue',

    }, 
    button: {
        backgroundColor: 'blue',
        paddingVertical: scale(10),
        alignItems: 'center',
        borderRadius: scale(5),
        position: 'absolute',
        bottom: scale(20),
        alignSelf: 'center',
        width: "70%"

    },
    disable:{
        opacity: 0.5
    },
    buttonText: {
        color: colors.white,
        fontSize: scale(16),
        fontWeight: 'bold'
    },
})