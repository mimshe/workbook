import React, {Component} from 'react';
import {Container, Content, Icon, View} from "native-base";
import login from '../../assets/style/auth/login';
import Text from "../../components/Common/Text";
import {TextInput, TouchableOpacity} from "react-native";
import DashInput from "../../components/Common/DashInput";
import {primaryColor, secondaryColor} from "../../helper/colors";
import {screenWidth} from "../../helper/index";

export default class Login extends Component {

    state = {
        mobile: '',
        mobileDescription: 'شماره تلفن خود را وارد کنید',
        backgroundColor: secondaryColor,
    };
    _onChangeText = (mobile) => {
        this.setState({
            mobile
        }, () => {
            if (this.state.mobile.length === 11) {
                this.setState({
                    mobileDescription: 'دکمه تایید را کلیک کنید',
                    backgroundColor: primaryColor
                });
            } else {
                this.setState({
                    mobileDescription: 'شماره تلفن خود را وارد کنید',
                    backgroundColor: secondaryColor
                })
            }
        })


    };

    render() {

        return (
            <Content contentContainerStyle={login.container}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        // backgroundColor: '#D1C4E9',
                    }}
                >
                    <View
                        style={login.header}
                    >
                        <View style={login.mobileSection}>
                            <DashInput
                                autoFocus={true}
                                keyboardType="number-pad"
                                maxLength={11}
                                onChangeText={this._onChangeText}
                                value={this.state.mobile}
                            />
                            <Text h5 style={login.mobileText}>{this.state.mobileDescription}</Text>
                        </View>
                        <TouchableOpacity style={[login.submit, {backgroundColor: this.state.backgroundColor}]}>
                            <Icon name='md-person-add' style={login.submitIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={login.subHeader}
                    >
                        <Text>قبلا ثبت نام کرده ام / <Text primary>ورود</Text></Text>
                    </View>
                </View>


                <View style={login.body}>
                    <Text primary h3>
                        ثبت نام
                    </Text>
                    <Text h4>
                        در سامانه کسب و کار مجازی
                    </Text>
                </View>

            </Content>
        );
    }

}