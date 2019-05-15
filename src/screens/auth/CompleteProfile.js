import React, {Component} from 'react';
import {Content, Icon} from 'native-base';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import profile from "../../assets/style/auth/profile";
import View from "../../components/Common/View";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import InputIcon from "../../components/Common/InputIcon";
import Tooltip from "../../components/Tooltip";
import { RNSelectionMenu } from 'react-native-selection-menu'

export default class CompleteProfile extends Component {

    state = {
        jobDescription: '',
        addressDescription: 'مقادیر زیر را جهت آدرس محل کسب و کار خود پر کنید',
        fullAddress: '',
        completeProfile: 'ساخت پروفایل اولیه و شاخص شما',
        completeTextColor: '#4a4a4a',
        viewBackgroundColor: '#e2e2e2',
        buttonBackgroundColor: '#d0d0d0',
        image: null,
    };
    _onPress (props) {
        RNSelectionMenu.Show({
            values: [
                "Open Camera",
                "Select from gallery",
                "Cancel",
            ],
            selectedValues: [ "Open Camera" ,"Select from gallery"],
            selectionType: 1,
            title : 'Choose ...',
            presentationType: 0,
            searchPlaceholder: "Search Value",
            // searchTintColor: "#FFFFFF",
            onSelection: selectedValues => {
              if (selectedValues === "Open Camera" ){
                  this._openCamera()
              }
              if (selectedValues === "Select from gallery") {
                  this._openPicker()
              }
            },
            ...props
        });
    }

    _onChangeText = (jobDescription, fullAddress) => {
        this.setState({jobDescription, fullAddress}, () => {
            if (this.state.jobDescription.length === 0) {
                this.setState({
                    completeProfile: 'ساخت پروفایل اولیه و شاخص شما',
                    viewBackgroundColor: '#e2e2e2',
                    buttonBackgroundColor: '#d0d0d0',
                    completeTextColor: '#4a4a4a',
                })
            } else {
                this.setState({
                    completeProfile: 'پروفایل‌شما‌با‌موفقیت‌تکمیل‌گردید.برای‌ورود‌به‌برنامه‌کلیک‌کنید',
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
                <Image style={{width: 80, height: 80, margin: 10}}
                       source={require('../../assets/images/logo.png')}/>)
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
                        <Text h6 style={profile.text}>یک عنوان برای صنف شغلی خود انتخاب کنید</Text>
                    </View>
                    <View style={profile.box}>
                        <View style={profile.chooseProfile}>
                            <TouchableOpacity  onPress={() => {this._onPress({presentationType: 1})}}>
                                {this._checkProfile(this.state)}
                            </TouchableOpacity>
                        </View>
                        <Text h7 style={profile.text}>برای انتخاب یک پروفایل اختصاصی روی باکس بالا کلیک کنید</Text>
                    </View>
                    <View style={{alignItems: 'flex-start', zIndex: 1, marginBottom: -40, marginLeft: 6}}>
                        <Tooltip/>
                    </View>
                    <View style={profile.addressBox}>
                        <View style={profile.addressBoxTitle}>
                            <Icon name='md-pin'/>
                            <View style={profile.separator}/>
                            <Text h6 style={profile.text}>{this.state.addressDescription}</Text>
                        </View>
                        <View style={profile.inputAddressView}>
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
                        <Text style={{fontSize: 12, paddingRight: 50}}
                              color={this.state.completeTextColor}>{this.state.completeProfile}</Text>
                    </View>
                </View>
                <View style={profile.subHeader}>
                    <Text h7 color={primaryColor} style={{marginTop: 8}}>جهت نمایش سایت و آخرین اخبار برنامه کلیک
                        کنید</Text>
                </View>
                <View style={profile.footerView}>
                    <Image source={require('../../assets/images/logo.png')}
                           style={profile.logo}/>
                    <Text style={{width: 120}} h6>لورم ایپسوم متن ساختگی با تولید
                        سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                        است.</Text>
                </View>
            </Content>
        )
    }
}
