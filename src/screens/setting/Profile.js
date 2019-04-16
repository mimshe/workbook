import React, {Component} from 'react';
import {Content, Icon} from 'native-base';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import profile from "../../assets/style/setting/profile";
import View from "../../components/Common/View";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import InputIcon from "../../components/Common/InputIcon";

export default class Profile extends Component {

    state = {
        jobDescription: '',
        addressDescription: 'مقادیر زیر را جهت آدرس محل کسب و کار خود پر کنید',
        completeProfile: 'ساخت پروفایل اولیه و شاخص شما',
        completeTextColor: '#4a4a4a',
        viewBackgroundColor: '#e2e2e2',
        buttonBackgroundColor: '#d0d0d0',
        image: null,
    };
    _onChangeText = (jobDescription) => {
        this.setState({jobDescription}, () => {
            if (jobDescription !== null) {
                this.setState({
                    completeProfile:
                        'پروفایل شما با موفقیت تکمیل گردید. برای ورود به برنامه کلیک کنید',
                    viewBackgroundColor: '#3fc409',
                    buttonBackgroundColor: '#178c0f',
                    completeTextColor: 'white'
                })
            }

        })
    };

    _checkProfile = () => {
        if (this.state.image === null) {
            return (
                <Image style={{width: 80, height: 80, margin: 10}} source={require('../../assets/images/logo.png')}/>)
        } else {
            return (<Image style={{width: 80, height: 80, margin: 10}} source={this.state.image}/>)
        }
    };

    _openPicker = () => {
        ImagePicker.openPicker({
            width: 80,
            height: 80,
            cropping: true
        }).then(image => {
            this.setState({image: {uri: image.path, width: image.width, height: image.height, mime: image.mime}})
        });
    };
    _openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({image: {uri: image.path, width: image.width, height: image.height, mime: image.mime}})
        });
    };

    render() {
        return (
            <Content contentContainerStyle={profile.container}>
                <View style={profile.header}>
                    <View style={profile.box}>
                        <InputIcon onChangeText={this._onChangeText}/>
                        <Text h5 style={profile.text}>یک عنوان برای صنف شغلی خود انتخاب کنید</Text>
                    </View>
                    <View style={profile.box}>
                        <View style={profile.chooseProfile}>
                            <TouchableOpacity onPress={this._openPicker}>
                                {this._checkProfile(this.state)}
                            </TouchableOpacity>
                        </View>
                        <Text h5 style={profile.text}>برای انتخاب یک پروفایل اختصاصی روی باکس بالا کلیک کنید</Text>
                    </View>
                    <View style={profile.addressBox}>
                        <View style={profile.addressBoxTitle}>
                            <Icon name='md-pin'/>
                            <View style={profile.separator}/>
                            <Text h5 style={profile.text}>{this.state.addressDescription}</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding: 5}}>
                            <TextInput
                                placeholder='استان / شهر / ناحیه / آدرس محلی'
                                style={profile.inputAddress}/>
                        </View>
                    </View>
                    <View style={[profile.acceptView, {backgroundColor: this.state.viewBackgroundColor}]}>
                        <TouchableOpacity
                            style={[profile.acceptButton, {backgroundColor: this.state.buttonBackgroundColor}]}>
                            <Icon name='ios-arrow-forward' style={profile.acceptButtonIcon}/>
                        </TouchableOpacity>
                        <Text color={this.state.completeTextColor}>ساخت پروفایل اولیه و شاخص شما</Text>
                    </View>
                </View>
                <View style={profile.subHeader}>
                    <Text h5 color={primaryColor} style={{paddingLeft: 10}}>جهت نمایش سایت و آخرین اخبار برنامه کلیک
                        کنید</Text>
                </View>
                <View style={profile.footerView}>
                    <Image source={require('../../assets/images/logo.png')}
                           style={{width: 120, height: 120, margin: 20}}/>
                    <Text style={{width: 200, marginLeft: 15}} numberOfLines={4} h5>لورم ایپسوم متن ساختگی با تولید
                        سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                        است.</Text>
                </View>
            </Content>
        )
    }
}
