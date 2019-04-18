import EStyleSheet from 'react-native-extended-stylesheet';
import {screenHeight} from "../../../helper";

const index = EStyleSheet.create({
    container: {
        height : screenHeight(),
        backgroundColor : 'white',
        flex  :1
    },
    header : {
        backgroundColor : 'white',
        shadowColor: '#e2e2e2',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 15,
    },
    headerInside :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 10
    },
    headerTitle : {
        fontSize: 12,
        paddingRight: 10
    },
    buttonGroup :{
        height: 30,
        borderRadius: 30 ,
        marginTop : 25,
        marginLeft : 30,
        marginRight : 30,
    },
    firstIndex : {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around' ,
        padding : 5
    },
    card : {
        width: 120,
        minHeight : 220,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom : 20
    },
    thumbnail : {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        marginTop: 20
    },
    cardFooterLike : {
        width: 120,
        height: 30,
        backgroundColor: '#fe4c4c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardFooterComment : {
        width: 120,
        height: 30,
        backgroundColor: '#434343',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default index;
