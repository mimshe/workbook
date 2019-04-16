import React, {Component} from 'react';
import {View, Icon, Input} from 'native-base'
import {primaryColor} from "../../helper/colors";
import EStyleSheet from "react-native-extended-stylesheet";

export default class InputIcon extends Component {
    render() {
        return (
            <View style={style.view}>
                <Icon name='md-list-box' style={style.icon}/>
                <View style={style.separator}/>
                <Input
                    style={style.input}
                    onChangeText={text => this.props.onChangeText(text)}
                    value={this.props.value}/>
            </View>
        )
    }
}
const style = EStyleSheet.create({
    view: {
        flexDirection: 'row',
        marginTop : 10,
        marginRight : 10 ,
        marginLeft : 10 ,
        borderWidth: .8,
        borderColor: primaryColor,
        alignItems: 'center',
    },
    input: {
        height: 40,
        textAlign: 'left',
        fontFamily: '$fontFamily',
        color: '$primaryColor',
        padding: 5,
        marginRight: 5,
        fontSize: 14,
    },
    separator: {
        width: .8,
        height: 30,
        backgroundColor: '$secondaryColor',
        marginLeft: 10
    },
    icon: {
        color: '$secondaryColor',
        marginLeft: 10
    },
});