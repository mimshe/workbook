import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import {Container, Header, Icon, View, Content} from 'native-base'
import index from "../../assets/style/followers";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import Tooltip from "../../components/Tooltip";
import edit from "../../assets/style/editProfile/edit";
import {TextInput} from "react-native";


export default class MyProfile extends Component {
    render() {
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color: '#dddddd'}}/>
                        <Text style={index.headerTitle} color={primaryColor}>ویرایش پروفایل - آدرس های من</Text>
                    </View>
                </Header>
                <Content>
                    <View style={{paddingTop: 30, alignItems: 'center'}}>
                        <Text h7 color='red'>لوکیشنی که در فیلدها پر کرده اید به عنوان محل کار شما لحاظ خواهد شد</Text>
                        <Text h7 color='red'>اما با انتخاب گزینه آدرس محل اصل شما گزینه هم صنفی ها را فعال خواهید کرد و
                            در لوکیشن ها</Text>
                        <Text h7 color='red'> محل کار شما به نمایش هم صنفی های</Text>
                        <Text h7 color='red'>خود در خواهد آمد</Text>
                    </View>
                    <View style={edit.tooltipView}>
                        <Tooltip/>
                    </View>
                    <View style={edit.addressBox}>
                        <View style={edit.addressBoxTitle}>
                            <Icon name='md-pin'/>
                            <View style={edit.separator}/>
                            <Text h6 style={edit.text}>h</Text>
                        </View>
                        <View style={edit.inputAddressView}>
                            <TextInput
                                placeholder='استان / شهر / ناحیه / آدرس محلی'
                                style={edit.inputAddress}/>
                        </View>
                    </View>
                    <View style = {{alignItems : 'flex-end' , marginRight : 20 , marginTop : 10}}>
                    <TouchableOpacity style = {{backgroundColor : '#ff714d' , borderRadius : 3 , height : 40 , width : 140 , alignItems : 'center',justifyContent:'center'}}>
                        <Text h7 color = 'white'>انتخاب به عنوان آدرس محل‌اصلی</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={edit.tooltipView}>
                        <Tooltip/>
                    </View>
                    <View style={edit.addressBox}>
                        <View style={edit.addressBoxTitle}>
                            <Icon name='md-pin'/>
                            <View style={edit.separator}/>
                            <Text h6 style={edit.text}>h</Text>
                        </View>
                        <View style={edit.inputAddressView}>
                            <TextInput
                                placeholder='استان / شهر / ناحیه / آدرس محلی'
                                style={edit.inputAddress}/>
                        </View>
                    </View>
                    <View style = {{alignItems : 'flex-end' , marginRight : 20 , marginTop : 10}}>
                        <TouchableOpacity style = {{backgroundColor : '#b7b7b7' , borderRadius : 3 , height : 40 , width : 140 , alignItems : 'center',justifyContent:'center'}}>
                            <Text h7 color = 'black'>انتخاب به عنوان آدرس محل‌اصلی</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}