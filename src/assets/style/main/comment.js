import EStyleSheet from "react-native-extended-stylesheet";
import {screenWidth} from "../../../helper";

const comment = EStyleSheet.create({
    sendView: {
        width: screenWidth() - 20,
        backgroundColor: '#4b57dc',
        borderRadius: 20,
        height: 80,
        alignSelf: 'center',
        marginBottom: 15,
        position : 'absolute',
        bottom : 0
    },
    input : {
        margin: 5,
        height: 30,
        fontFamily: '$fontFamily',
        fontSize: 8,
        textAlign: 'right',
        borderWidth: .8,
        borderColor : '#ffffff',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius : 30,

    },
    sendButton : {
        width : 30,
        height : 30,
        borderRadius : 15,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center'

    },
    sendButtonIcon :{
        fontSize : 16,
        color : 'blue'
    },
    sendViewBottom : {
        justifyContent : 'space-between',
        paddingHorizontal : 5,
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 2
    },
    ratingView : {
        backgroundColor : 'white',
        height : 20,
        width : 80,
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : .8,
        borderColor :'white'
    }
});

export default comment;