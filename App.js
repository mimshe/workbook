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
import Profile from "./src/screens/setting/Profile";

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
                    <Scene key="auth" hideNavBar>
                        <Scene key="login" component={Login}/>
                    </Scene>
                    <Scene key="setting" hideNavBar initial>
                        <Scene key="profile" component={Profile} initial/>
                    </Scene>
                </Scene>

            </Router>
        );
    }
}

