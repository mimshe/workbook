import EStyleSheet from "react-native-extended-stylesheet";
import {primaryColor} from "../../../helper/colors";

const edit = EStyleSheet.create({
    addressBox: {
        borderWidth: .8,
        borderColor: '#3fd62d',
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "stretch"
    },
    tooltipView: {
        alignItems: 'flex-start',
        zIndex: 1,
        marginTop: 20,
        marginBottom: -18,
        marginLeft: 6.5
    },
    separator: {
        width: .8,
        height: 30,
        backgroundColor: '$secondaryColor',
        marginLeft: 10
    },
    addressBoxTitle: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        alignItems: 'center'
    },
    inputAddressView: {
        flexDirection: 'row',
        padding: 5
    },
    inputAddress: {
        margin: 5,
        flex: 1,
        height: 40,
        fontFamily: '$fontFamily',
        fontSize: 14,
        textAlign: 'left',
        borderWidth: .8,
        borderColor: primaryColor,
        alignItems: 'center',
        paddingLeft: 10
    },
    text: {
        marginLeft: 10
    },

});

export default edit;