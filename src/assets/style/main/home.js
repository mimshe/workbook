import EStyleSheet from 'react-native-extended-stylesheet'
import {screenWidth} from "../../../helper";



const home = EStyleSheet.create({
    userBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 15
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnail: {
        width: 35,
        height: 35,
        borderRadius: 17.5
    },
    username: {
        marginLeft: 10
    },
    postImage: {
        width: screenWidth(),
        height: 300,
        backgroundColor: 'gray',
        marginTop: 10
    },
    statusBar: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    leftSideStatusBar: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    likeButtonView: {
        height: 25,
        width: 90,
        borderWidth: .8,
        borderColor: '#ff4d00',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    likeIcon: {
        fontSize: 18,
        color: '#c90004'
    },
    commentButtonView: {
        height: 25,
        width: 90,
        borderWidth: .8,
        borderColor: '#7f807f',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginRight: 10
    },
    commentIcon: {
        fontSize: 18,
        color: '#7f807f'
    },
    rateBarView: {
        marginLeft: 8
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    priceButton: {
        flex: 3,
        height: 30,
        borderRadius: 3,
        marginLeft: 5,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoButton: {
        //width : 90,
        height: 30,
        flex: 2,
        borderRadius: 3,
        marginLeft: 5,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        flex: 1,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#d2d2d2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textArea: {
        margin: 10,
        borderBottomWidth: .8
    },
    textAreaStyle: {
        fontSize: 12,
        fontFamily: '$fontFamily',
    },
    commentBoxView: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    commentBoxIcon: {
        fontSize: 22,
        color: '#db6149'
    },
    commentBoxTitle: {
        marginLeft: 5
    },
    commentBoxCount: {
        marginLeft: 10
    },
    commentBoxText: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        alignItems: 'center'
    },
    tag: {
        marginLeft : 10,
        marginBottom : 15,
        width: 50,
        height: 20,
        marginTop : 15,
        backgroundColor: '#6eddff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 20
    },
    tagView : {
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    infoBox : {
        flex : 1 ,
        flexDirection : 'row',
        flexWrap : 'wrap',
        marginTop : 10,
        paddingHorizontal : 10,
        justifyContent : 'space-between'
    },
    infoView : {
        flex : .49,
        backgroundColor : '#e0e0e0',
        height : 30,
        alignItems : 'flex-start',
        justifyContent : 'center',
        paddingLeft : 5
    },
    inputAddress: {
        margin: 10,
        height: 40,
        fontFamily: '$fontFamily',
        fontSize: 12,
        textAlign: 'left',
        borderWidth: .8,
        borderColor : '#bababa',
        alignItems: 'center',
        paddingLeft: 10
    },
});

export default home;