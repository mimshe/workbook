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
    buttonGroup: {
        height: 40,
        marginTop: 25,
    },
    buttonGroupView: {
        flex : 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonGroupIcon: {
        color: '#a1a1a1',
        fontSize: 22
    },
    infoBox: {
        flexDirection : 'row',
        alignSelf : 'center',
        justifyContent : 'space-between',
       flex : 2 ,
        backgroundColor : 'black',
        height : 100,
        marginTop : 25,
    }
});

export default home;
