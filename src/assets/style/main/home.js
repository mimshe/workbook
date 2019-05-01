import EStyleSheet from 'react-native-extended-stylesheet'
import {screenWidth} from "../../../helper";

const home = EStyleSheet.create({
    header: {
        backgroundColor: 'white',
        shadowColor: '#e2e2e2',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 15,
    },
    headerInside: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 7

    },
    keyIcon : {
        fontSize: 25,
        color: '#2d2d2d'
    },
    pencilIcon : {
        fontSize: 25,
        color: '#2d2d2d',
        marginLeft: 20
    },
    headerBadge : {
        marginTop: -8,
        marginLeft: -10,
        backgroundColor: 'transparent'
    },
    userInfo : {
        alignItems: 'flex-start',
        flex: .5 ,
        justifyContent : 'center'
    },
    avatar : {
        flex: .5,
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black'
    },
    usernameView : {
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    changeProfileView : {
        flexDirection: 'row',
        justifyContent: 'center' ,
        alignItems : 'center'
    },
    ySeparator : {
        width: 13,
        height: 13,
        borderRadius: 6.5,
        backgroundColor: 'green',
        marginRight: 5
    },
    changeProfileButton : {
        borderLeftWidth: .8,
        borderLeftColor: '#f0f0f0',
        paddingLeft: 5
    } ,
    xSeparator : {
        marginLeft: 10,
        backgroundColor: 'gray',
        height: .8,
        width: screenWidth() / 1.5
    },
    infoBoxBottomView : {
        alignItems: 'center',
        flex: .33,
        borderRightWidth: .8,
        borderRightColor: '#f5f5f5'
    },
    buttonGroup: {
        height: 40,
        marginTop: 25,
    },
    buttonGroupView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonGroupIcon: {
        color: '#a1a1a1',
        fontSize: 22
    },
    infoBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flex: 2,

        height: 100,
        marginTop: 15,
    }
});

export default home;
