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
    }
});

export default addProduct;