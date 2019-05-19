import React, {Component} from 'react'
import {Container, Header, Icon, View, Content} from 'native-base'
import index from "../../assets/style/followers";
import Text from "../../components/Common/Text";
import {activeButtonColor, inActiveButtonColor, primaryColor} from "../../helper/colors";
import addProduct from '../../assets/style/main/addProduct'
import {ButtonGroup} from 'react-native-elements'

import {
    TextInput,
    LayoutAnimation,
    StyleSheet,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
} from 'react-native'
import ReactChipsInput from 'react-native-chips';
import {screenWidth} from "../../helper";

class Expandable_ListView extends Component {
    constructor() {
        super();
        this.state = {
            layout_Height: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item.expanded) {
            this.setState(() => {
                return {
                    layout_Height: null
                }
            });
        } else {
            this.setState(() => {
                return {
                    layout_Height: 0
                }
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.layout_Height !== nextState.layout_Height;
    }


    render() {
        return (
            <View style = {{width: screenWidth() - 36}}>

                <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>
                    <Icon name='ios-arrow-down' style = {{color : 'white'}}/>
                </TouchableOpacity>

                <View style={{height: this.state.layout_Height, overflow: 'hidden'}}>
                    <TextInput placeholder='توضیحات تکمیلی' style={addProduct.input}/>
                    <TextInput placeholder='شماره تماس' style={addProduct.input}/>
                    <TextInput placeholder='برچسب ها' style={addProduct.input}/>
                </View>
            </View>

        );
    }
}

const component1 = () => <Text color = 'black' h6>نقدی</Text>;
const component2 = () => <Text color = 'black' h6>توافقی</Text>;
export default class AddProduct extends Component {
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
        const array = [
            {
                expanded: false,
                category_Name: "Mobiles",
                sub_Category: [{id: 1, name: 'Mi'}, {id: 2, name: 'RealMe'}, {id: 3, name: 'Samsung'},
                    {id: 4, name: 'Infinix'}, {id: 5, name: 'Oppo'}, {id: 6, name: 'Apple'}, {id: 7, name: 'Honor'}]
            },
        ];
        this.state = {
            AccordionData: [...array],
            selectedIndex : 0
        }
    }

    update_Layout = (index) => {

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        const array = [...this.state.AccordionData];

        array[index]['expanded'] = !array[index]['expanded'];

        this.setState(() => {
            return {
                AccordionData: array
            }
        });
    };

    render() {
        const buttons = [{element: component1}, {element: component2}];
        const {selectedIndex} = this.state;
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color: '#dddddd'}}/>
                        <Text h7 style={index.headerTitle} color={primaryColor}>ثبت کالا - نیازمند خرید این کالا
                            هستم</Text>
                    </View>
                </Header>
                <Content padder>
                    <View style={addProduct.container}>
                        <View style={addProduct.addView}>
                            <Icon name='md-add' style={addProduct.addIcon}/>
                        </View>
                    </View>
                    <ButtonGroup
                        selectedButtonStyle = {{backgroundColor : primaryColor}}
                        buttonStyle={{backgroundColor : '#a0a0a0'}}
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={addProduct.buttonGroup}/>
                    <TextInput
                        placeholder='عنوان'
                        style={addProduct.input}
                    />
                    <ReactChipsInput label="گروه"
                                     onChangeChips={(chips) => console.log(chips)}
                                     chipStyle={{backgroundColor: '#1e1e1e', height: 20}}/>
                    <TextInput
                        placeholder='لوکیشن'
                        style={addProduct.input}
                    />
                    <TextInput
                        placeholder='نوع کالا'
                        style={addProduct.input}
                    />
                    <View style={styles.MainContainer}>
                        <ScrollView contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 5}}>
                            {
                                this.state.AccordionData.map((item, key) =>
                                    (
                                        <Expandable_ListView key={item.category_Name}
                                                             onClickFunction={this.update_Layout.bind(this, key)}
                                                             item={item}/>
                                    ))
                            }
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 10,
    },

    iconStyle: {

        width: 30,
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        tintColor: '#fff'

    },

    sub_Category_Text: {
        fontSize: 18,
        color: '#000',
        padding: 10
    },

    category_Text: {
        textAlign: 'left',
        color: '#fff',
        fontSize: 21,
        padding: 10
    },

    category_View: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf : 'center',
        backgroundColor: '#7e7e7e',
        width: 60,
        height: 60,
        borderRadius: 30
    },

    Btn: {
        padding: 10,
        backgroundColor: '#FF6F00'
    }

});
