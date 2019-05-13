import React, {Component} from 'react'
import {ButtonGroup} from "react-native-elements";
import {Icon, View, Content} from 'native-base'
import {TouchableOpacity, TextInput} from 'react-native'
import settingProfile from "../assets/style/main/settingProfile";
import Text from "../components/Common/Text";
import EStyleSheet from "react-native-extended-stylesheet";
import {screenHeight, screenWidth} from "../helper";
import BaseModal from "./modal/BaseModal";
import SingleButton from "../components/modal/SingleButton";
import InputIcon from "./Common/InputIcon";

const tab1 = () => {
    return (
        <TouchableOpacity style={styles.tab1}>
            <Icon name='md-list' style={settingProfile.buttonGroupIcon}/>

        </TouchableOpacity>
    )
};
const tab2 = () => {
    return (
        <TouchableOpacity style={styles.tab1}>
            <Icon name='apps' style={settingProfile.buttonGroupIcon}/>
        </TouchableOpacity>
    )
};
const tab3 = () => {
    return (
        <TouchableOpacity style={styles.tab1}>
            <Icon name='md-options' style={settingProfile.buttonGroupIcon}/>
        </TouchableOpacity>
    )
};

export default class Resome extends Component {
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
        const buttons = [{element: tab1}, {element: tab2}, {element: tab3}];
        const {selectedIndex} = this.state;
        return (
            <View>
                <ButtonGroup
                    selectedButtonStyle={{backgroundColor: '#e6e6e6'}}
                    buttonStyle={{backgroundColor: 'transparent'}}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{borderWidth: 0}}
                />
                {selectedIndex === 0 &&
                <Content padder>
                    <View style={{flex: 1}}>
                        <View style={{
                            backgroundColor: '#ecff06',
                            height: screenHeight() * .15,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <View style={{
                                backgroundColor: 'black',
                                height: 30,
                                width: 120,
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 10
                            }}>
                                <Text h6>150400 تومان</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#ecff06',
                            height: screenHeight() * .15,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <View style={{
                                backgroundColor: 'black',
                                height: 30,
                                width: 120,
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 10
                            }}>
                                <Text h6>150400 تومان</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#ecff06',
                            height: screenHeight() * .15,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <View style={{
                                backgroundColor: 'black',
                                height: 30,
                                width: 120,
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 10
                            }}>
                                <Text h6>150400 تومان</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                }
                {selectedIndex === 1 &&
                <Content padder>
                    <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{
                            backgroundColor: 'black', flex: .33, height: 120, justifyContent: 'flex-end',
                        }}>
                            <View style={{
                                margin: 10,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text h6>150400 تومان</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: 'black', flex: .33, height: 120, justifyContent: 'flex-end',
                        }}>
                            <View style={{
                                margin: 10,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text h6>150400 تومان</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: 'black', flex: .33, height: 120, justifyContent: 'flex-end',
                        }}>
                            <View style={{
                                margin: 10,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text h6>150400 تومان</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                }
                {selectedIndex === 2 &&
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => this.modal._toggleModal()}>
                        <Text h5> open modal</Text>
                    </TouchableOpacity>
                    <BaseModal title='فیلترسازی نمایش پست ها' ref={(ref) => this.modal = ref}>
                        <SingleButton text='نمایش براساس عنوان'/>
                        <SingleButton text='نمایش براساس صنف'/>
                        <SingleButton text='نمایش براساس رضایت مندی'/>
                        <TextInput
                            placeholder="استان / شهر / بخش یا ناحیه"
                            style={styles.input}
                        />
                    </BaseModal>
                </View>
                }
            </View>

        )
    }
}
const styles = EStyleSheet.create({
    tab1: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0
    },
    input: {
        marginLeft : 10,
        marginRight : 10,
        paddingLeft: 20,
        paddingRight: 20,
        height: 40,
        textAlign: 'center',
        borderWidth: .8,
        borderColor: '#8c8c8c',
        fontSize: 12,
        marginTop: 5,
        fontFamily: '$fontFamily'
    }
});
