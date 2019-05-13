import React , {Component} from 'react'
import {Icon, View} from "native-base";
import Text from "../../components/Common/Text";

export default class SingleButton extends Component{
    render () {
        const {
            text = ''
        } = this.props;
        return (
            <View style={{
                height: 30,
                backgroundColor: '#f9f9f9',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 15
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
                    <Text h7 style={{marginLeft: 10}}>{text}</Text>
                </View>
            </View>
        )
    }
}
