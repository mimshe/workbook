import React, {Component} from 'react';
import {View, Icon, Input} from 'native-base'
import {primaryColor} from "../../helper/colors";
import EStyleSheet from "react-native-extended-stylesheet";

export default class InputIcon extends Component {
    state = {
        text: ''
    };

    render() {
        const {icon = this.props.name} = this.props;
        return (
            <View style={style.view}>
                <Icon name={icon} style={style.icon}/>
                <View style={style.separator}/>
                <Input
                    {...this.props}
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
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderWidth: .8,
        borderColor: primaryColor,
        alignItems: 'center',
        height : 40
    },
    input: {

        textAlign: 'left',
        fontFamily: '$fontFamily',
        color: '$primaryColor',
        paddingLeft: 10,
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
        fontSize: 22,
        marginLeft: 10
    },
});