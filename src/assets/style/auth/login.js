import EStyleSheet from 'react-native-extended-stylesheet';
import {screenHeight, screenWidth} from "../../../helper/index";

const login = EStyleSheet.create({
    container: {
        alignItems: 'center',
        height: screenHeight(),
    },
    header: {
        width: screenWidth() - 40,
        maxWidth: 600,
        height: 300,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '$backgroundColor',
        zIndex: 10,
        shadowColor: "#000",
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    subHeader: {
        zIndex: 1,
        width: screenWidth() - 100,
        maxWidth: 540,
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$backgroundColor',

        shadowColor: "#000",
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    mobileText: {
        alignSelf: "stretch",
        textAlign: 'right',
        marginRight: 20,
        marginTop: 5
    },
    submit: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededef'
    },
    submitIcon: {
        color: '#fff',
        fontSize: 40,
        shadowColor: "#000",
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 1,
        elevation: 4,
    },
    mobileSection: {
        alignSelf: "stretch",
        marginTop:40
    }
});

export default login;