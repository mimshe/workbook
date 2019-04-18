import EStyleSheet from 'react-native-extended-stylesheet';
import {screenHeight} from "../../../helper";

const index = EStyleSheet.create({
    container: {
        height : screenHeight(),
        backgroundColor : 'white'
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
    }
});

export default index;