import React, {Component} from 'react'
import {Container, Content, Header, Icon, View} from 'native-base'
import {TouchableOpacity, Image} from 'react-native'
import home from "../../assets/style/main/home";
import BadgeWrite from "../../components/BadgeWrite";
import {ButtonGroup} from "react-native-elements";
import Text from "../../components/Common/Text";
import Resome from "../../components/Resome";

const tab1 = () => {
    return (
        <View style={home.buttonGroupView}>
            <Icon name='md-list-box' style={home.buttonGroupIcon}/>
            <Text style={{marginLeft: 5}} h6>رزومه‌کاری</Text>
        </View>
    )
};
const tab2 = () => {
    return (
        <View style={home.buttonGroupView}>
            <Icon name='md-pin' style={home.buttonGroupIcon}/>
            <Text style={{marginLeft: 5}} h6>آدرس‌های‌من</Text>
        </View>
    )
};
const tab3 = () => {
    return (
        <View style={home.buttonGroupView}>
            <Icon name='ios-folder-open' style={home.buttonGroupIcon}/>
            <Text style={{marginLeft: 5}} h6>هم‌صنفی‌ها</Text>
        </View>
    )
};

export default class Home extends Component {
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

    render() {
        const buttons = [{element: tab1}, {element: tab2}, {element: tab3}];
        const {selectedIndex} = this.state;
        return (
            <Container>
                <Header style={home.header}>
                    <View style={home.headerInside}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name='md-keypad' style={home.keyIcon}/>
                            </TouchableOpacity>
                            <Icon name='md-create' style={home.pencilIcon}/>
                            <View style={home.headerBadge}>
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
                    <View style={home.infoBox}>
                        <View style={home.userInfo}>
                            <Image style={home.avatar} source={require('../../assets/images/logo.png')}/>
                        </View>
                        <View >
                            <View style={home.usernameView}>
                                <Text h6>متخصص سیستم های امنیتی فروشگاه</Text>
                                <View style={home.changeProfileView}>
                                    <View style={home.ySeparator} />
                                    <TouchableOpacity
                                        style={home.changeProfileButton}>
                                        <Text h7>ویرایش پروفایل</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <View style={home.xSeparator} />

                            <View style={{flexDirection: 'row', marginTop: 5}}>
                                <View style={home.infoBoxBottomView} >
                                    <Text primary h5>475</Text>
                                    <Text h7>صاحبان‌کسب‌و‌کار</Text>
                                </View>
                                <View style={home.infoBoxBottomView} >
                                    <Text primary h5>475</Text>
                                    <Text h7>صاحبان‌کسب‌و‌کار</Text>
                                </View>
                                <View style={home.infoBoxBottomView} >
                                    <Text primary h5>475</Text>
                                    <Text h7>صاحبان‌کسب‌و‌کار</Text>
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
                        containerStyle={home.buttonGroup}/>
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
