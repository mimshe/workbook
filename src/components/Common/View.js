import React, {Component} from 'react';
import styles from "../../assets/style/style";
import {View as BaseView} from 'native-base';

export default class View extends Component {
    render() {
        const {style = {}} = this.props;
        return (
            <BaseView style={[styles.view, style]}>{this.props.children}</BaseView>
        );

    }
}