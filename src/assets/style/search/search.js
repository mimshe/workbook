import EStyleSheet from "react-native-extended-stylesheet";
import {screenHeight, screenWidth} from "../../../helper";
import {activeButtonColor} from "../../../helper/colors";

const search = EStyleSheet.create({
    header: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 7,
    },
    headerInside: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between',
        width: '100%',
        padding: 7

    },
    filterIcon : {
        fontSize: 25,
        color: '#c5c5c5'
    },
    main: {
        height: screenHeight() - 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        height: screenHeight() * .5,
        maxHeight: 460,
        width: screenWidth() / 1.1,
        maxWidth: 500,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    searchBar: {

        flex: 1,
        right: 20,
        backgroundColor: '#eeff6e',
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    input: {
        fontFamily: '$fontFamily',
        fontSize: 12,
        textAlign: 'left',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    searchInput: {
        flex: .95,
        backgroundColor: 'transparent',
        fontFamily: '$fontFamily',
        textAlign: 'left',
        fontSize: 12,
        alignSelf: 'center'
    },
    searchResultCard: {
        height : 70,
        width : null ,
        backgroundColor: '#f1f1f1',
        marginTop : 15,
        flexDirection : 'row',
        alignItems : 'center'
    },
    cardFooter: {
        top : 120,
        width: 100,
        height: 30,
        backgroundColor: '#434343',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar : {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 10
    },
    userInfoBox : {
        flexDirection: 'row',
        marginLeft : 5 ,
        marginBottom : 5
    },
    followButton : {
        marginLeft : 5 ,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 20,
        borderRadius: 20,
        backgroundColor: activeButtonColor
    }
});

export default search;
