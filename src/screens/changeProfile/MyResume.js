import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import {Container, Header, Icon, View, Content} from 'native-base'
import index from "../../assets/style/followers";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import myResume from "../../assets/style/editProfile/myResume";
import {TextInput} from "react-native";

export default class MyResume extends Component {
    state: {
        levelOfEducation: ''
    };

    render() {
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color: '#dddddd'}}/>
                        <Text style={index.headerTitle} color={primaryColor}>ویرایش پروفایل - رزومه من</Text>
                    </View>
                </Header>
                <Content padder>
                    <View style={myResume.educationView}>
                        <View style={myResume.educationInsideView}>
                            <Icon name='md-quote'/>
                            <View style={myResume.separator}/>
                            <TextInput
                                placeholder='مدرک تحصیلی'
                                style={myResume.inputAddress}/>

                            <View style={{flex: .3, flexDirection: 'row', alignItems: 'flex-end'}}>
                                <TouchableOpacity style={myResume.addButton}>
                                    <Icon style={myResume.addIcon} name='md-add'/>
                                </TouchableOpacity>
                                <TouchableOpacity style={myResume.removeButton}>
                                    <Text color='white' h6>کاردانی -</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <View style={myResume.educationView}>
                        <View style={myResume.educationInsideView}>
                            <Icon name='md-settings'/>
                            <View style={myResume.separator}/>
                            <TextInput
                                placeholder='مهارت ها'
                                style={myResume.inputAddress}/>

                            <View style={{flex: .3,flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity style={myResume.addButton}>
                                    <Icon style={myResume.addIcon} name='md-add'/>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={myResume.educationView}>
                        <View style={myResume.educationInsideView}>
                            <Icon name='md-settings'/>
                            <View style={myResume.separator}/>
                            <TextInput
                                placeholder='سابقه فعالیت'
                                style={myResume.inputAddress}/>
                            <View style={{flex : .3,flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity style={myResume.addButton}>
                                    <Icon style={myResume.addIcon} name='md-add'/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}