import React, {Component} from 'react'
import EStyleSheet from "react-native-extended-stylesheet";
import {View , Text} from 'react-native'
import {primaryColor} from "../helper/colors";

export default class BadgeWrite extends Component {
    render() {
        return (
            <View style={styles.badgeRibbonCircle}>
                <View style={styles.triangle}/>

                <Text style={{fontSize : 12 , position : 'absolute' , color : 'white'}}>3</Text>
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    badgeRibbonCircle: {
        width: 18,
        height: 18,
        backgroundColor: primaryColor,
        borderRadius: 9,
        alignItems : 'center',
        justifyContent : 'center'
    },
    triangle: {
        marginBottom : -15,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 9,
        borderRightWidth: 9,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: primaryColor,
        transform: [
            {rotate: '180deg'}
        ]
    }
});

