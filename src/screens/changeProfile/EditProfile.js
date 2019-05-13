import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import {Container, Icon, View , Header} from 'native-base'
import Text from "../../components/Common/Text";
import settingProfile from '../../assets/style/main/settingProfile'
import index from "../../assets/style/followers";
import {primaryColor} from "../../helper/colors";

export default class EditProfile extends Component {
    render() {
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color: '#dddddd'}}/>
                        <Text style={index.headerTitle} color={primaryColor}>ویرایش پروفایل</Text>
                    </View>
                </Header>
                <View style={settingProfile.containerEditPage}>
                    <TouchableOpacity style={{
                        backgroundColor: 'gray',
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}>
                        <Icon name='md-camera'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={settingProfile.touchable}>
                        <Text color='white'>پروفایل من</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingProfile.touchable}>
                        <Text color='white'>آدرس های من</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingProfile.touchable}>
                        <Text color='white'>رزومه من</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
