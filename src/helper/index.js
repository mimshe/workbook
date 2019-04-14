import {Dimensions, Platform} from 'react-native';

export const screenWidth = () => {

    return Dimensions.get('window').width;
};
export const screenHeight = () => {
    return Dimensions.get('window').height
};

export const isAndroid = () => {
    return Platform.OS === 'android';
};
export const isIos = () => {
    return Platform.OS === 'ios';
};

