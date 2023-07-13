import { StyleSheet } from "react-native";
import { scale } from "../../../../common/utils";
import colors from "../../../../common/colors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: scale(10),
        paddingVertical: scale(5),
        borderWidth: scale(1.2),
        borderColor: 'grey',
        borderRadius: scale(5),
        backgroundColor: colors.skyBlue,
        marginVertical: scale(10)
    },
    name: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: scale(15)
    },
    type:{
        fontSize: scale(13)
    }
})