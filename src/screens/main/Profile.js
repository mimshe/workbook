import React, {Component} from 'react'
import {Container, Content, Header, Icon, View} from 'native-base'
import {TouchableOpacity, Image} from 'react-native'
import settingProfile from "../../assets/style/main/settingProfile";
import BadgeWrite from "../../components/BadgeWrite";
import {ButtonGroup} from "react-native-elements";
import Text from "../../components/Common/Text";
import Resome from "../../components/Resome";
import {Actions} from "react-native-router-flux";

const tab1 = () => {
    return (
        <View style={settingProfile.buttonGroupView}>
            <Icon name='md-list-box' style={settingProfile.buttonGroupIcon}/>
            <Text style={{marginLeft: 5}} h6>رزومه‌کاری</Text>
        </View>
    )
};
const tab2 = () => {
    return (
        <View style={settingProfile.buttonGroupView}>
            <Icon name='md-pin' style={settingProfile.buttonGroupIcon}/>
            <Text style={{marginLeft: 5}} h6>آدرس‌های‌من</Text>
        </View>
    )
};
const tab3 = () => {
    return (
        <View style={settingProfile.buttonGroupView}>
            <Icon name='ios-folder-open' style={settingProfile.buttonGroupIcon}/>
            <Text style={{marginLeft: 5}} h6>هم‌صنفی‌ها</Text>
        </View>
    )
};

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 0
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    _editProfile = () => {
        Actions.push('edit_profile')
    };

    render() {
        const buttons = [{element: tab1}, {element: tab2}, {element: tab3}];
        const {selectedIndex} = this.state;
        return (
            <Container>
                <Header style={settingProfile.header}>
                    <View style={settingProfile.headerInside}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name='md-keypad' style={settingProfile.keyIcon}/>
                            </TouchableOpacity>
                            <Icon name='md-create' style={settingProfile.pencilIcon}/>
                            <View style={settingProfile.headerBadge}>
                                <BadgeWrite/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name='md-add' style={{color: '#f1f1f1', fontSize: 20, marginRight: 10}}/>
                            </TouchableOpacity>
                            <View style={{
                                backgroundColor: '#cbcbcb',
                                width: 20,
                                height: 20,
                                borderRadius: 10,
                                marginRight: 10
                            }}/>
                            <View style={{backgroundColor: 'gray', width: 20, height: 20, borderRadius: 10}}/>
                        </View>
                    </View>
                </Header>
                <Content padder>
                    <View style={settingProfile.infoBox}>
                        <View style={settingProfile.userInfo}>
                            <Image style={settingProfile.avatar} source={require('../../assets/images/logo.png')}/>
                        </View>
                        <View >
                            <View style={settingProfile.usernameView}>
                                <Text h6>متخصص سیستم های امنیتی فروشگاه</Text>
                                <View style={settingProfile.changeProfileView}>
                                    <View style={settingProfile.ySeparator} />
                                    <TouchableOpacity
                                        onPress = {this._editProfile}
                                        style={settingProfile.changeProfileButton}>
                                        <Text h7>ویرایش</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <View style={settingProfile.xSeparator} />

                            <View style={{flexDirection: 'row', marginTop: 5}}>
                                <View style={settingProfile.infoBoxBottomView} >
                                    <Text primary h5>475</Text>
                                    <Text h7>صاحبان‌کسب‌و‌کار</Text>
                                </View>
                                <View style={settingProfile.infoBoxBottomView} >
                                    <Text primary h5>475</Text>
                                    <Text h7>مشتریان</Text>
                                </View>
                                <View style={settingProfile.infoBoxBottomView} >
                                    <Text primary h5>475</Text>
                                    <Text h7>پست های ارسال شده</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style = {{height : 100 , marginRight : 10 , marginLeft : 10}}>
                        <Text h7 color = '#2d2d2d'>بیوگرافی</Text>
                        <View style = {{flexDirection : 'row' , alignItems : 'center' , alignSelf : 'center'}}>
                            <View style = {{marginRight : 15 , alignItems : 'center'}}>
                                <Text h7>آدرس سایت</Text>
                                <Text h7>www.work.com</Text>
                            </View>

                            <View style = {{ alignItems : 'center'}}>
                                <Text h7>آی دی تلگرام</Text>
                                <Text h7>t.me/workbook</Text>
                            </View>
                        </View>
                        <Text h7>لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم </Text>
                    </View>
                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#e6e6e6'}}
                        buttonStyle={{backgroundColor: '#f3f3f3'}}
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={settingProfile.buttonGroup}/>
                    {selectedIndex === 0 &&
                    <Content>
                        <Resome />
                    </Content>
                    }
                </Content>
            </Container>
        )
    }
}
