import React, {Component} from "react";
import {View} from "native-base";
import {Image, TouchableOpacity} from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet";
import Text from "./Common/Text";
import {activeButtonColor, inActiveButtonColor} from "../helper/colors";

export default class FollowersItem extends Component<{}> {
    render() {
        let {item} = this.props;
        return (
            <View style={style.main}>
                <Image source={require('../assets/images/logo.png')}
                       style={{width: 60, height: 60, borderRadius: 30}}/>
                <View style={style.user}>
                    <Text style={{paddingRight: 15}} color='black'>{item.name}</Text>
                    <View style={style.bottom}>
                        <TouchableOpacity activeOpacity={.8} style={style.followButton}>
                            <Text h5 color='black'>دنبال کنید</Text>
                        </TouchableOpacity>
                        <View style={style.costumersView}>
                            <Text h5 color='black'>از مشتریان شما شده است</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const style = EStyleSheet.create({
    main: {
        padding: 15,
        flexDirection: 'row',
        borderBottomWidth : .8,
        borderBottomColor : '#e3e3e3',
        borderBottomStartRadius : 40,
        borderBottomEndRadius : 40,
    },
    user: {
        padding: 5,
    },
    bottom : {
        flexDirection: 'row',
        marginTop : 5
    },
    followButton: {
        backgroundColor: activeButtonColor,
        alignItems: 'center',
        borderRadius: 30,
        width: 100,
        marginRight: 10
    },
    costumersView: {
        backgroundColor: inActiveButtonColor,
        alignItems: 'center',
        borderRadius: 30,
        width: 150,

    }
});
