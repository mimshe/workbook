import React, {Component} from 'react'
import {Container, Header, Icon, View, Content} from 'native-base'
import index from "../../assets/style/followers";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import InputIcon from "../../components/Common/InputIcon";
import HalfInput from "../../components/input/HalfInput";

export default class MyProfile extends Component {
    state = {
        jobDescription : '',
        mobile : '',
        activity : '',
        email : '',
        username : '',
        password : '',
        about : '',
        site : '',
        telegram : '',
        instagram : '',
        soroush : ''

    };
    _onChangeInput1 = (jobDescription) => {
      this.setState({jobDescription})
    };
    render() {
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color: '#dddddd'}}/>
                        <Text style={index.headerTitle} color={primaryColor}> ویرایش پروفایل - پروفایل من</Text>
                    </View>
                </Header>
                <Content padder>
                    <InputIcon  placeholder = 'متخصص سیستم های امنیتی' name = 'md-settings' onChangeText = {this._onChangeInput1}/>
                    <InputIcon editable={false} placeholder = '09198686***' name = 'md-call'/>
                    <Text h7 color = 'red' style = {{marginLeft : 10}}>امکان تغییر شماره وجود ندارد</Text>
                    <InputIcon placeholder = 'انتخاب صنف فعالیت' name = 'md-list-box'/>
                    <InputIcon placeholder = 'ایمیل شخصی' name = 'md-mail'/>
                    <Text h7 color = 'red' style = {{marginLeft : 10}}>شما 2 ماه زمان دارید تا ایمیل را وارد کنید</Text>
                    <InputIcon placeholder = 'نام کاربری' name = 'md-person'/>
                    <InputIcon placeholder = '**********' name = 'md-unlock'/>
                    <InputIcon placeholder = 'توضیحات درباره خودتان' name = 'md-quote'/>
                    <View style = {{flexDirection : 'row' , justifyContent : 'center'}}>
                        <HalfInput placeholder='آدرس وبسایت' name = 'md-quote'/>
                        <HalfInput placeholder='آیدی تلگرام' name = 'md-quote'/>
                    </View>
                    <View style = {{flexDirection : 'row' , justifyContent : 'center' ,paddingBottom : 20}}>
                        <HalfInput placeholder='پیج اینستاگرام' name = 'md-quote'/>
                        <HalfInput placeholder='آیدی سروش' name = 'md-quote'/>
                    </View>

                </Content>
            </Container>
        )
    }
}