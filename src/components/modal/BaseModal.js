import React, {Component} from 'react'
import Modal from 'react-native-modal'
import {Icon, View, Content} from "native-base";
import Text from "../../components/Common/Text";
import {primaryTextColor} from "../../helper/colors";
import {TouchableOpacity} from "react-native";
import search from '../../assets/style/search/search'

export default class BaseModal extends Component {
    state = {
        isModalVisible: false,
    };
    _toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible})
    };

    render() {
        const {
            title = ''
        } = this.props;
        return (
            <Modal onBackdropPress={this._toggleModal} style={{alignItems: 'center'}}
                   isVisible={this.state.isModalVisible}>
                <View style={search.modalView}>
                    <View style={{padding: 5, flex: .15}}>
                        <Text color={primaryTextColor} h6
                              style={{paddingRight: 10, paddingBottom: 5, paddingTop: 5}}>{title}</Text>
                        <View style={{
                            height: .8,
                            width: '95%',
                            backgroundColor: '#b4b4b4',
                            alignSelf: 'center'
                        }}/>
                    </View>
                    <Content contentContainerStyle={{marginBottom: 30, flex: 1}}>
                        {this.props.children}
                    </Content>
                    <View style={{flex: .15}}>
                        <TouchableOpacity
                            style={{
                                borderTopRightRadius: 10,
                                borderBottomLeftRadius: 20,
                                height: 50,
                                width: 50,
                                justifyContent: 'center',
                                backgroundColor: '#f9f9f9',
                                position: 'absolute',
                                bottom: 1,
                                left: 1
                            }}>
                            <Icon name='ios-arrow-forward' style={{
                                alignSelf: 'center',
                                fontSize: 25,
                                color: '#808080'
                            }}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderTopLeftRadius: 10,
                                borderBottomRightRadius: 20,
                                height: 50,
                                width: 50,
                                justifyContent: 'center',
                                backgroundColor: '#f9f9f9',
                                position: 'absolute',
                                bottom: 1,
                                right: 0
                            }}>
                            <Icon name='md-refresh' style={{
                                alignSelf: 'center',
                                fontSize: 25,
                                color: '#808080'
                            }}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}
