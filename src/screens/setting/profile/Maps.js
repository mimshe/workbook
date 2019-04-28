import React, {Component} from 'react';
import {Content, Icon, View} from 'native-base'
import profile from "../../../assets/style/setting/profile";
import {TouchableOpacity} from "react-native";
import Text from "../../../components/Common/Text";
import {primaryColor} from "../../../helper/colors";

export default class Maps extends Component {
    state = {
        viewBackgroundColor: '#e2e2e2',
        buttonBackgroundColor: '#d0d0d0',
    };

    render() {
        return (
            <Content contentContainerStyle={profile.container}>
                <View style={profile.header}>

                    <View style={[profile.acceptView, {backgroundColor: this.state.viewBackgroundColor}]}>
                        <TouchableOpacity
                            style={[profile.mapPageBackButton, {backgroundColor: this.state.buttonBackgroundColor}]}>
                            <Icon name='ios-arrow-back' style={profile.acceptButtonIcon}/>
                        </TouchableOpacity>
                        <Text h6 color={this.state.completeTextColor}>ساخت پروفایل اولیه و شاخص شما</Text>
                    </View>
                </View>
                <View style={profile.subHeader}>
                    <Text h6 color={primaryColor} style={{marginTop: 8}}>جهت نمایش سایت و آخرین اخبار برنامه کلیک
                        کنید</Text>
                </View>
            </Content>
        )
    }
}
