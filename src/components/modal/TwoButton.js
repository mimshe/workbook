import React, {Component} from 'react'
import {Icon, View} from "native-base";
import Text from "../../components/Common/Text";
import {TouchableOpacity} from "react-native";
import {activeButtonColor, inActiveButtonColor} from "../../helper/colors";
import index from "../../assets/style/followers";
import {ButtonGroup} from "react-native-elements";
import {screenWidth} from "../../helper";

export default class MultiButton extends Component {
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
        const {
            text = '', btn1 = '', btn2 = '', btn3 = '', onChangeText = () => {
            },
            onPress = () => {
            }
        } = this.props;
        const buttons = [{element: <Text color='black' h6>{btn1}</Text>}, {
            element: <Text color='black' h6>{btn2}</Text>
        }];
        const {selectedIndex} = this.state;

        return (
            <View style={{
                height: 60,
                backgroundColor: '#f9f9f9',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    margin: 5,
                    alignItems: 'center'
                }}>
                    <View style={{
                        position: 'absolute',
                        right: 0,
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: '#9b9b9b'
                    }}/>
                    <Icon name='ios-arrow-back' style={{fontSize: 16, color: '#929592'}}/>
                    <Text h6 style={{marginLeft: 10}}>{text}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity
                        style={{
                            flex: .45,
                            height: 20,
                            backgroundColor: '#e7e7e7',
                            alignItems: 'center'
                        }}>
                        <Text h6>{btn1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: .45,
                            height: 20,
                            backgroundColor: '#e7e7e7',
                            alignItems: 'center'
                        }}>
                        <Text h6>{btn2}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
