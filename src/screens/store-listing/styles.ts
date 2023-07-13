import { StyleSheet } from "react-native";
import { scale } from "../../common/utils";

export default StyleSheet.create({
    loadingTxt:{
        textAlign: 'center',
    },
    search:{
        borderWidth: scale(1),
        marginVertical:scale(5),
        borderRadius: scale(5),
        padding: scale(10)
    }
})