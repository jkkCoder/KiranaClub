import {StyleSheet} from 'react-native'
import { scale } from '../../utils'
import colors from '../../colors'

export default StyleSheet.create({
    container: {
        height: scale(50),
        backgroundColor: colors.lightblue,
        alignItems: 'center',
        paddingLeft: scale(10),
        flexDirection: 'row'
    },
    hasBack: {
        flex: 1,
        textAlign: 'center',
        paddingRight: scale(60)
    },
    notHasBack:{
        flex:1,
    },
    back: {
        padding: scale(7),
        color: colors.black
    },
    txt:{
        fontSize: scale(16),
        color: colors.white,
        paddingLeft: scale(10), 
    },
    logout:{
        backgroundColor: colors.skyBlue,
        position: 'absolute',
        right: scale(10),
        padding: scale(7),
        borderRadius: scale(5)
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0,0.5)',
    },
    modalContent:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },
    btnContainer:{ 
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    btn:{
        backgroundColor:colors.lightblue,
        padding: scale(10),
        width: scale(70),
        borderRadius:scale(5),
        marginHorizontal: scale(10)
    }
})