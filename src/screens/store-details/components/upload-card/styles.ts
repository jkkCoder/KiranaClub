import {StyleSheet} from "react-native"
import { scale } from "../../../../common/utils"
import colors from "../../../../common/colors"

export default StyleSheet.create({
    container: {
        borderWidth: scale(1),
        paddingHorizontal: scale(10),
        paddingVertical: scale(5),
        marginVertical: scale(40),
        borderRadius: scale(5),
        borderColor:'grey',
        elevation: scale(50),
        backgroundColor: colors.white,
        flexDirection: 'row'
    },
    image:{
        borderRadius: scale(5),
    },
    progressContainer: {
        marginLeft: scale(20),
        flex:1,
        justifyContent: 'center'
    },
    uploadTxt:{
        color: 'black',
        fontSize: scale(14)
    },
    progress:{
        fontSize: scale(10)
    }
})