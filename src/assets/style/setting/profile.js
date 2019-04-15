import EStyleSheet from "react-native-extended-stylesheet";
import {primaryColor} from "../../../helper/colors";
import {screenHeight, screenWidth} from "../../../helper";

const profile = EStyleSheet.create({
    container: {
        alignItems: 'center',
        height: screenHeight(),
        backgroundColor: 'white'
    },
    header: {
        alignItems: 'center',
        width: screenWidth() - 40,
        maxWidth: 600,
        height: 480,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        backgroundColor: 'white',
        zIndex: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 7,

    },
    subHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 470,
        width: screenWidth() - 100,
        maxWidth: 540,
        height: 50,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        backgroundColor: 'white',
        // backgroundColor: '#7E57C2',
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 5,
    },
    view: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: primaryColor,
        alignItems: 'center',
    },
    separator: {
        width: .8,
        height: 30,
        backgroundColor: '$secondaryColor',
        marginLeft: 10
    },
    icon: {
        color: '$secondaryColor',
        marginLeft: 10
    },
    text: {
        marginLeft: 10
    },
    chooseProfile: {
        backgroundColor: '#e4e4e4',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40
    },
    box: {
        alignSelf: "stretch"
    },
    addressBox: {
        borderWidth: .8,
        borderColor: '#d6d6d6',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "stretch"
    },
    addressBoxTitle: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    inputAddress: {
        backgroundColor: '#ececec',
        margin: 5,
        flex: 1,
        height: 40,
        fontFamily: '$fontFamily',
        fontSize: 14,
        textAlign: 'left',
    },
    acceptView: {
        bottom: -24,
        alignSelf: 'stretch',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    acceptButton: {
        flex: .2,
        borderBottomLeftRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        position: 'absolute',
        left: 0
    },
    acceptButtonIcon: {
        alignSelf: 'center',
        fontSize: 35,
        color: 'white'
    }
});
export default profile;