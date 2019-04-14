import {Dimensions} from 'react-native';

const screenWidth = () => {

    return Dimensions.get('window').width;
};
const screenHeight = () => {
    return Dimensions.get('window').height
};

export {screenHeight, screenWidth};
