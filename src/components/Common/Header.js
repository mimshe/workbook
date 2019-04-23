import React, {Component} from 'react';
import {Header as BaseHeader} from "native-base";
import {Platform} from 'react-native'
import {primaryAndroid, primaryDarkAndroid, primaryDarkIos, primaryIos} from "../../assets/color/colors";

export default class Header extends Component {
    render() {
        let {searchBar = false} = this.props;
        return (
            <BaseHeader searchBar={searchBar}
                        androidStatusBarColor={Platform.OS !== 'ios' ? primaryDarkAndroid : primaryDarkIos}
                        style={{backgroundColor: Platform.OS !== 'ios' ? primaryAndroid : primaryIos}}>{this.props.children}</BaseHeader>
        )
    }
}
