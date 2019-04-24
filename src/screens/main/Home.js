import React, {Component} from 'react'
import {Container, Content, Header, Icon, View} from 'native-base'
import {TouchableOpacity, Image} from 'react-native'
import home from "../../assets/style/main/home";
import BadgeWrite from "../../components/BadgeWrite";
import {ButtonGroup} from "react-native-elements";
import Text from "../../components/Common/Text";
import {screenWidth} from "../../helper";

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
                                <Icon name='md-keypad' style={{fontSize: 25, color: '#2d2d2d'}}/>
                            </TouchableOpacity>
                            <Icon name='md-create' style={{fontSize: 25, color: '#2d2d2d', marginLeft: 20}}/>
                            <View style={{marginTop: -8, marginLeft: -10, backgroundColor: 'transparent'}}>
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
                        <View style={{justifyContent: 'center'}}>
                            <View style={{flexDirection: 'row' , marginBottom : 5}}>
                                <Text h6>متخصص سیستم های امنیتی فروشگاه</Text>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 9}}>ویرایش پروفایل</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                marginLeft: 10,
                                backgroundColor: 'gray',
                                height: .8,
                                width: screenWidth() / 1.5
                            }}/>

                            <View style={{flexDirection: 'row' , marginTop : 5 }}>
                                <View style = {{alignItems:'center', flex :.33 , borderRightWidth : .8 , borderRightColor : '#f5f5f5'}}>
                                    <Text primary h4>475</Text>
                                    <Text style = {{fontSize : 9}}>صاحبان‌کسب‌و‌کار</Text>
                                </View>

                                <View style = {{alignItems:'center' , flex : .33, borderRightWidth : .8 , borderRightColor : '#f5f5f5'}}>
                                    <Text primary h4>475</Text>
                                    <Text style = {{fontSize : 9}}>مشتریان</Text>
                                </View>

                                <View style = {{alignItems:'center' , flex : .33 , marginLeft :5}}>
                                    <Text primary h4>475</Text>
                                    <Text style = {{fontSize : 9}}>پست‌های‌ارسال‌شده</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems: 'flex-start' , flex : .5}}>
                            <Image style={{
                                flex: .2,
                                width: null,
                                height: null,
                                borderRadius: 30,
                                borderWidth: 2,
                                borderColor: 'black'
                            }} source={require('../../assets/images/logo.png')}/>
                        </View>
                    </View>
                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#e6e6e6'}}
                        buttonStyle={{backgroundColor: '#f3f3f3'}}
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={home.buttonGroup}/>
                </Content>
            </Container>
        )
    }
}
