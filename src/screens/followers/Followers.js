import React, {Component} from 'react';
import {Content, View, Icon, Header} from 'native-base'
import {ButtonGroup, Image} from "react-native-elements";
import Text from "../../components/Common/Text";
import {activeButtonColor, inActiveButtonColor, primaryColor} from "../../helper/colors";
import index from '../../assets/style/followers/index'
import FollowersItem from "../../components/FollowersItem";

import {FlatList} from 'react-native'
const component1 = () => <Text color = 'black' h5>رویدادهای‌اخیر</Text>;
const component2 = () => <Text color = 'black' h5>دنبال‌کنندگان‌اخیر</Text>;
const component3 = () => <Text color = 'black' h5>لایک‌شده‌ها</Text>;

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
            <Content contentContainerStyle={index.container}>
                <Header style={index.header}>
                    <View style = {index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color : '#dddddd'}}/>
                        <Text style={index.headerTitle} color={primaryColor}>آخرین وضعیت دنبال
                            کنندگان</Text>
                    </View>
                </Header>
                <ButtonGroup
                    selectedButtonStyle = {{backgroundColor : activeButtonColor}}
                    buttonStyle={{backgroundColor : inActiveButtonColor}}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={index.buttonGroup}/>
                {selectedIndex === 0
                && <Content contentContainerStyle={index.firstIndex}>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <Text color={primaryColor} h5 style={{padding: 10}}>من محصولا فروش این را پسندیدم</Text>
                        <View style={index.cardFooterComment}>
                            <Icon name='md-chatbubbles' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                    <View style={index.card}>
                        <Image
                            style={index.thumbnail}
                            source={require('../../assets/images/logo.png')}/>
                        <Text>نام پروفایل</Text>
                        <View style={index.cardFooterLike}>
                            <Icon name='md-heart' style={{color: 'white', fontSize: 20}}/>
                        </View>
                    </View>
                </Content>}
                {selectedIndex === 1
                &&
                <FlatList
                    renderItem={({item}) => <FollowersItem item={item}/>}
                    data={[
                        {
                            name: 'لورم ایپسوم',
                            avatar:'',
                        },
                        {
                            name: 'لورم ایپسوم',
                            avatar:'',
                        },
                        {
                            name: 'لورم ایپسوم',
                            avatar:'',
                        },
                        {
                            name: 'لورم ایپسوم',
                            avatar:'',
                        },

                    ]}
                    keyExtractor={(item) => item.name}
                />
                }

            </Content>
        )
    }
}
