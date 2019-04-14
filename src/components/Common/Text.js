import React, {Component} from 'react';
import {Text as BaseText} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {primaryColor, secondaryColor} from "../../helper/colors";

export default class Text extends Component {
    render() {
        let {style = {}, primary = false, color = secondaryColor, fontSize = 14, h3 = false, h4 = false, h5 = false} = this.props;
        if (primary) {
            color = primaryColor
        }
        if (h3) {
            fontSize = 24
        }
        if (h4) {
            fontSize = 18
        }
        if (h5) {
            fontSize = 14
        }
        if (h5) {
            fontSize = 12
        }
        return (
            <BaseText style={[{fontFamily: 'IRANSansMobile(FaNum)', color, fontSize}, style]}>
                {this.props.children}
            </BaseText>
        );
    }
}