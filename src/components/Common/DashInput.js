import React, {Component} from 'react';
import {TextInput, View} from "react-native";

export default class DashInput extends Component {

    state = {
        text: ''
    }

    render() {
        return (
            <View style={style.view}>
                <Icon name='phone-portrait' style={style.icon}/>
                {/* <TextInput style={style.input} placeholder='hi men'/>*/}
                <TextInputMask
                    {...this.props}
                    type={'custom'}

                    options={{
                        /**
                         * mask: (String | required | default '')
                         * the mask pattern
                         * 9 - accept digit.
                         * A - accept alpha.
                         * S - accept alphanumeric.
                         * * - accept all, EXCEPT white space.
                         */
                        mask: ('99999999999')
                    }}
                    placeholder='0 9 - - - - - - - - -'
                    value={this.props.value}
                    onChangeText={text => this.props.onChangeText(text)}
                    style={style.input}
                />
            </View>
        );
    }

}
import EStyleSheet from 'react-native-extended-stylesheet';
import {TextInputMask} from "react-native-masked-text";
import {Icon} from "native-base";

const style = EStyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#f7f7f9',
        borderRadius: 25,
        alignSelf: "stretch",
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: 50,
        textAlign: 'center',
        lineHeight: 22,
        fontSize: 20,
        marginTop: 5,
        textDecorationStyle: 'dashed',
        letterSpacing: 10,
        color: '$primaryColor',
        fontFamily: '$fontFamily'
    },
    icon: {
        color: '$secondaryColor',
        position: 'absolute',
        left: 20,
        top: 10
    }
});