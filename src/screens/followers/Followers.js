import React, {Component} from 'react';
import {Content, Card, View, Icon, Header} from 'native-base'
import {ButtonGroup, Image} from "react-native-elements";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import index from '../../assets/style/followers/index'

const component1 = () => <Text color = 'black' h5>آخرین لایک ها و کامنت ها</Text>;
const component2 = () => <Text color = 'black' h5>آخرین تغییرات در دنبال کننده ها</Text>;
const component3 = () => <Text color = 'black' h5>لایک شده های من</Text>;

export default class Followers extends Component {
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
        const buttons = [{element: component1}, {element: component2}, {element: component3}];
        const {selectedIndex} = this.state;

        return (
            <Content contentContainerStyle={{backgroundColor: 'white' , flex :1}}>
                <Header style={index.header}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '100%',
                        padding: 10
                    }}>
                        <Icon name='ios-arrow-forward' style={{color : '#dddddd'}}/>
                        <Text style={{fontSize: 12, paddingRight: 10}} color={primaryColor}>آخرین وضعیت دنبال
                            کنندگان</Text>
                    </View>
                </Header>
                <ButtonGroup
                    selectedButtonStyle = {{backgroundColor : '#aac4d1'}}
                    buttonStyle={{backgroundColor : '#c7ebfb'}}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 30, borderRadius: 30 , marginTop : 25}}/>
                {selectedIndex === 0
                && <View style={{flex :1,flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' , padding : 5}}>
                    <Card style={{
                        width: 120,
                        height: 200,
                        backgroundColor: '#f5f5f5',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'black', marginTop: 20}}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={{
                            width: 120,
                            height: 30,
                            backgroundColor: '#fe4c4c',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </Card>
                    <Card style={{

                        width: 120,
                        height: 200,
                        backgroundColor: '#f5f5f5',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'black', marginTop: 20}}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={{
                            width: 120,
                            height: 30,
                            backgroundColor: '#fe4c4c',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </Card>
                    <Card style={{
                        width: 120,
                        maxHeight: 220,
                        minHeight: 180,
                        backgroundColor: '#f5f5f5',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'black', marginTop: 20}}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <Text color={primaryColor} h5 style={{padding: 10}}>من محصولا فروش این را پسندیدم</Text>
                        <View style={{
                            width: 120,
                            height: 30,
                            backgroundColor: '#515151',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon name='md-chatbubbles' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </Card>
                </View>}
                {selectedIndex === 1
                && <Text> Tab two</Text>}

            </Content>
        )
    }
}
