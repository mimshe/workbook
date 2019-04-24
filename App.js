import React, {Component} from 'react';
import Intro from "./src/screens/Intro";
import {Router, Scene,} from "react-native-router-flux";
import EStyleSheet from 'react-native-extended-stylesheet';
import Login from "./src/screens/auth/Login";
import {backgroundColor, primaryColor, primaryTextColor, secondaryColor, secondaryTextColor} from "./src/helper/colors";

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $backgroundColor: backgroundColor,
    $primaryColor: primaryColor,
    $secondaryColor: secondaryColor,
    $primaryTextColor: primaryTextColor,
    $secondaryTextColor: secondaryTextColor,
    $fontFamily: "IRANSansMobile(FaNum)"
});
import {I18nManager} from 'react-native';
import Profile from "./src/screens/setting/profile/Profile";
import Maps from "./src/screens/setting/profile/Maps";
import Followers from "./src/screens/followers/Followers";
import Search from "./src/screens/search/Search";
import Main from "./src/screens/main/Main";
import Home from "./src/screens/main/Home";

export default class App extends Component {
    constructor() {
        super();
        I18nManager.forceRTL(true);
    }

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="intro" component={Intro}/>
                    <Scene key="auth" hideNavBar initial>
                        <Scene key="login" component={Login} />
                    </Scene>
                    <Scene key="setting" hideNavBar >
                        <Scene key="profile" component={Profile} />
                        <Scene key="map" component={Maps} />
                    </Scene >
                    <Scene key = "followers_status"  hideNavBar >
                        <Scene key = "last_followers_status" component = {Followers} />
                    </Scene>
                    <Scene key = "search_filter"  hideNavBar >
                        <Scene key = "search" component = {Search} />
                    </Scene>
                    <Scene key = "main"  hideNavBar initial>
                        <Scene key = "main_page" component = {Main} />
                        <Scene key = "home" component = {Home} initial/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

