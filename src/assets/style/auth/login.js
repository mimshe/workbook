import EStyleSheet from 'react-native-extended-stylesheet';
import {screenHeight, screenWidth} from "../../../helper/index";

const login = EStyleSheet.create({
    container: {
        alignItems: 'center',
        height: screenHeight(),
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: screenWidth() - 40,
        maxWidth: 600,
        height: 300,
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
        top: 290,
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
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    mobileText: {
        alignSelf: "stretch",
        marginStart: 20,
        marginTop: 5,
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
        marginTop: 40
    }
});

export default login;