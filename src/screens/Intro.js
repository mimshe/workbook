import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon, View} from "native-base";
import intro from "../assets/style/intro";
import Text from "../components/Common/Text";
import {Actions} from 'react-native-router-flux';

const slides = [
    {
        key: 'somethun',
        badge: 0,
        title: 'کسب و کار مجازی',
        text: 'لوریم ایپسوم متنی ساختگی در طراحی',
        image: require('../assets/images/logo.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        badge: 1,
        title: 'متن معرفی برنامه شماره ۱',
        text: 'لوریم ایپسوم متنی ساختگی در طراحی لوریم ایپسوم متنی ساختگی در طراحی',
        image: require('../assets/images/logo.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        badge: 2,
        title: 'متن معرفی برنامه شماره ۲',
        text: 'لوریم ایپسوم متنی ساختگی در طراحی لوریم ایپسوم متنی ساختگی در طراحی لوریم ایپسوم متنی ساختگی در طراحی',
        image: require('../assets/images/logo.png'),
        backgroundColor: '#22bcb5',
    }
];

export default class Intro extends Component {

    _badge = (show, item) => {
        if (!show)
            return (
                <View style={intro.badgeView}>
                    <Text style={intro.badge}>{item.badge}</Text>
                </View>
            );
    };
    _renderNextButton = () => {
        return (
            <View style={intro.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    size={24}
                    style={intro.nextIcon}
                />
            </View>
        );
    }
    _renderDoneButton = () => {
        return (
            <View style={intro.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    size={24}
                    style={intro.nextIcon}
                />
            </View>
        );
    }
    _renderPrevButton = () => {
        return (
            <View style={intro.buttonCircle}>
                <Icon
                    name="md-arrow-round-back"
                    size={24}
                    style={intro.nextIcon}
                />
            </View>
        );
    }
    _renderItem = (item) => {
        return (
            <View style={intro.renderView}>
                <View>
                    <Image style={intro.image} source={item.image}/>
                    {this._badge(item.badge === 0, item)}
                </View>
                <View>
                    <Text style={intro.title}>{item.title}</Text>
                    <Text style={intro.text}>{item.text}</Text>
                </View>
            </View>
        );
    };
    _onDone = () => {
        Actions.replace('auth');
    };

    render() {
        return (
            <AppIntroSlider
                renderNextButton={this._renderNextButton}
                renderDoneButton={this._renderDoneButton}
                renderPrevButton={this._renderPrevButton}
                dotStyle={intro.dot}
                showPrevButton={true}
                activeDotStyle={intro.activeDot}
                contentContainerStyle={intro.view}
                renderItem={this._renderItem}
                slides={slides}
                onDone={this._onDone}/>
        );
    }
}