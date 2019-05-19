import EStyleSheet from "react-native-extended-stylesheet";
import {screenWidth} from "../../../helper";

const addProduct = EStyleSheet.create({
    container: {
        flex: 1,
    },
    addView : {
        width : screenWidth() - 20,
        height : 120,
        borderWidth : .8,
        borderColor : '#777777',
        borderRadius : 10,
        marginTop : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    addIcon : {
        fontSize : 28,
    },
    input : {
        margin: 5,
        height : 30,

        fontFamily: '$fontFamily',
        fontSize: 10,
        textAlign: 'right',
        borderBottomWidth: .8,
        borderColor : '#d1d1d1',
        alignItems: 'center',
        padding: 7,

    },
    buttonGroup: {
        height: 30,
        borderRadius: 3,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
});

export default addProduct;