import React, {Component} from 'react';
import {Container, Content, Header, Icon, View} from 'native-base'
import {TouchableOpacity} from 'react-native';
import index from "../../assets/style/followers";
import {SearchBar} from 'react-native-elements';
import Text from "../../components/Common/Text";
import {screenHeight, screenWidth} from "../../helper";
import Modal from "react-native-modal";
import {primaryTextColor} from "../../helper/colors";

export default class Search extends Component {
    state = {
        search: '',
        isModalVisible: false,
        badgeColor: '#2d2d2d'
    };

    updateSearch = search => {
        this.setState({search});
    };
    _toggleModal = () =>
        this.setState({isModalVisible: !this.state.isModalVisible});

    render() {
        const {search} = this.state;
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <SearchBar
                            clearIcon={false}
                            searchIcon={{size: 25}}
                            containerStyle={{
                                flex: 1,
                                right: 20,
                                backgroundColor: 'transparent',
                                borderBottomWidth: 0,
                                borderTopWidth: 0
                            }}
                            inputContainerStyle={{backgroundColor: 'transparent'}}
                            inputStyle={{fontFamily: '$fontFamily', textAlign: 'left'}}
                            placeholder="جستجو"
                            onChangeText={this.updateSearch}
                            value={search}
                        />
                        <TouchableOpacity onPress={this._toggleModal}>
                            <Icon name='md-options' style={{fontSize: 25}}/>
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content contentContainerStyle={search.container}>
                    <View style={{height: screenHeight() - 60, alignItems: 'center', justifyContent: 'center'}}>
                        <Text h3 color='#2a2a2a'>موردی یافت نشد</Text>
                    </View>
                    <Modal onBackdropPress={this._toggleModal} style={{alignItems: 'center'}}
                           isVisible={this.state.isModalVisible}>
                        <View style={{
                            height: screenHeight() / 1.5,
                            width: screenWidth() / 1.2,
                            backgroundColor: 'white',
                            borderRadius: 20,
                        }}>
                            <View style={{padding: 5}}>
                                <Text color={primaryTextColor} h5 style={{padding: 10}}>فیلترسازی جستجو </Text>
                                <View style={{
                                    height: .8,
                                    width: '95%',
                                    backgroundColor: '#b4b4b4',
                                    alignSelf: 'center'
                                }}/>
                            </View>
                            <View style = {{justifyContent : 'space-around'}}>
                                <View style={{height: 60, backgroundColor: '#f9f9f9', marginLeft: 10, marginRight: 10 ,marginTop : 15}}>
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
                                        <Text h5 style={{marginLeft: 10}}>بر اساس قبمت</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <TouchableOpacity
                                            style={{
                                                width: 150,
                                                height: 20,
                                                backgroundColor: '#e7e7e7',
                                                alignItems: 'center'
                                            }}>
                                            <Text h5>ارزان ترین</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                width: 150,
                                                height: 20,
                                                backgroundColor: '#e7e7e7',
                                                alignItems: 'center'
                                            }}>
                                            <Text h5>گران ترین</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{height: 30, backgroundColor: '#f9f9f9', marginLeft: 10, marginRight: 10,marginTop : 15}}>
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
                                        <Text h5 style={{marginLeft: 10}}>نمایش بر اساس صنف</Text>
                                    </View>
                                </View>
                                <View style={{height: 30, backgroundColor: '#f9f9f9', marginLeft: 10, marginRight: 10,marginTop : 15}}>
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
                                        <Text h5 style={{marginLeft: 10}}>نمایش به میزان رضایتمندی کاربران</Text>
                                    </View>
                                </View>
                                <View style={{height: 60, backgroundColor: '#f9f9f9', marginLeft: 10, marginRight: 10,marginTop : 15}}>
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
                                        <Text h5 style={{marginLeft: 10}}>تصاویر</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <TouchableOpacity
                                            style={{
                                                width: 150,
                                                height: 20,
                                                backgroundColor: '#e7e7e7',
                                                alignItems: 'center'
                                            }}>
                                            <Text h5>نمایش داده بشوند</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{
                                                width: 150,
                                                height: 20,
                                                backgroundColor: '#e7e7e7',
                                                alignItems: 'center'
                                            }}>
                                            <Text h5>نمایش داده نشوند</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{height: 30, backgroundColor: '#f9f9f9', marginLeft: 10, marginRight: 10,marginTop : 15}}>
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
                                        <Text h5 style={{marginLeft: 10}}>نمایش بر اساس بروزترین پست ها</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 20,
                                    height: 50,
                                    width: 50,
                                    justifyContent: 'center',
                                    backgroundColor: '#f9f9f9',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0
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
                                    bottom: 0,
                                    right: 0
                                }}>
                                <Icon name='md-refresh' style={{
                                    alignSelf: 'center',
                                    fontSize: 25,
                                    color: '#808080'
                                }}/>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </Content>
            </Container>
        )
    }
}
