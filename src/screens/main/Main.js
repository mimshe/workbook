import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {Icon as BaseIcon} from 'native-base'
import Profile from "./Profile";
import {screenWidth} from "../../helper";

const FirstRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#673ab7'}]}/>
);
const SecondRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#f1ff86'}]}/>
);
const ThirdRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#5affa2'}]}/>
);
const FourthRoute = () => (
    <Profile/>
);

export default class Main extends Component {
    state = {
        index: 0,
        routes: [
            {key: 'person', icon: 'person'},
            {key: 'heart', icon: 'heart'},
            {key: 'search', icon: 'search'},
            {key: 'settingProfile', icon: 'settingProfile'},
        ],
    };
    _renderIcon = ({route}) => {

        return (
            <BaseIcon name={route.icon} size={24}/>
        );
        /* style={{ backgroundColor: 'transparent', color: '#c6c6c6',}}*/
    };

    _handleIndexChange = index => this.setState({index});


    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <TabBar
                {...props}
                indicatorStyle={{backgroundColor: 'transparent'}}
                activeColor='green'
                inactiveColor='gray'
                contentContainerStyle={{backgroundColor: 'transparent'}}
                renderIcon={this._renderIcon}
                style={{
                    backgroundColor: 'white',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    width: screenWidth() - 20
                }}
            />
        );
    };

    render() {
        return (
            <TabView
                style={{backgroundColor: 'transparent'}}
                swipeEnabled={false}
                navigationState={this.state}
                renderScene={SceneMap({
                    person: FirstRoute,
                    heart: SecondRoute,
                    search: ThirdRoute,
                    home: FourthRoute,
                })}
                tabBarPosition="bottom"
                renderTabBar={this._renderTabBar}
                onIndexChange={index => this.setState({index})}
                initialLayout={{width: Dimensions.get('window').width}}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
