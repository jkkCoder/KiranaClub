import { StyleSheet } from "react-native";
import { scale } from "../../../../common/utils";
import colors from "../../../../common/colors";

export default StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: scale(8),
        padding: scale(16),
        marginTop: scale(16),
        elevation: scale(10),
      },
      productType: {
        fontSize: scale(18),
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: scale(8),
        textAlign:'center',
      },
      name: {
        fontSize: scale(16),
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: scale(8),
      },
      info: {
        fontSize: scale(14),
        marginBottom: scale(4),
      },
})