import React, {Component} from 'react';
import {Container, Content, Header, Icon, View, Button} from 'native-base'
import {TouchableOpacity, TextInput} from 'react-native';
import index from "../../assets/style/followers";
import {ButtonGroup, Image} from 'react-native-elements';
import Text from "../../components/Common/Text";
import search from '../../assets/style/search/search'
import MultiButton from "../../components/modal/MultiButton";
import SingleButton from "../../components/modal/SingleButton";
import BaseModal from "../../components/modal/BaseModal";
import {activeButtonColor, inActiveButtonColor, primaryColor, primaryTextColor} from "../../helper/colors";

const component1 = () => <Text color = 'black' h5>رویدادهای‌اخیر</Text>;
const component2 = () => <Text color = 'black' h5>دنبال‌کنندگان‌اخیر</Text>;
const component3 = () => <Text color = 'black' h5>لایک‌شده‌ها</Text>;

export default class Search extends Component {
    state = {
        searching: '',
        badgeColor: '#2d2d2d',
        value: '',
        selectedIndex: 0
    };
    updateIndex=(selectedIndex)  =>{
        this.setState({selectedIndex})
    };
    render() {
        const buttons = [{element: component1}, {element: component2}, {element: component3}];
        const {selectedIndex} = this.state;
        return (
            <Container>
                <Header style={search.header}>
                    <View style={search.headerInside}>
                        {/*<SearchBar
                            clearIcon={false}
                            searchIcon={{size: 25}}
                            containerStyle={search.searchBar}
                            inputContainerStyle={{backgroundColor: 'transparent'}}
                            inputStyle={search.searchInput}
                            placeholder="جستجو"
                            placeholderStyle={{fontFamily: "IRANSansMobile(FaNum)"}}
                            onChangeText={this.updateSearch}
                            value={searching}
                        />*/}
                        <TouchableOpacity onPress={() => this.modal._toggleModal()}>
                            <Icon name='md-search' style={search.filterIcon}/>
                        </TouchableOpacity>
                        <TextInput placeholder='شهر مورد نظر خود را برای جستجو وارد کنید'
                                   placeholderTextFontFamily="IRANSansMobile(FaNum)"
                                   style={search.searchInput}/>
                        <TouchableOpacity onPress={() => this.modal._toggleModal()}>
                            <Icon name='md-options' style={{fontSize: 25}}/>
                        </TouchableOpacity>
                    </View>
                </Header>
                <Content padder contentContainerStyle={search.container}>
                    {/*<View style={search.main}>
                        <Text h3 color='#f3f3f3'>موردی یافت نشد</Text>
                    </View>*/}
                    <View style={search.searchResultCard}>
                        <Image style={search.avatar}
                               source={require('../../assets/images/logo.png')}/>
                        <View>
                            <View style={search.userInfoBox}>
                                <Text h6 color='black'> نام کاربری</Text>
                                <Text h6 color='black' style={{marginLeft: 5}}>[156 مشتری]</Text>
                            </View>
                            <Button style={search.followButton}><Text h6>دنبال کنید</Text></Button>
                        </View>
                    </View>
                    <View style={search.searchResultCard}>
                        <Image style={search.avatar}
                               source={require('../../assets/images/logo.png')}/>
                        <View>
                            <View style={search.userInfoBox}>
                                <Text h6 color='black'> نام کاربری</Text>
                                <Text h6 color='black' style={{marginLeft: 5}}>[156 مشتری]</Text>
                            </View>
                            <Button style={search.followButton}><Text h6>دنبال کنید</Text></Button>
                        </View>
                    </View>
                </Content>
                <BaseModal title='فیلتر سازی جستجو' ref={(ref) => this.modal = ref}>
                    <Content>
                        <MultiButton text='بر اساس قیمت' >
                            <ButtonGroup
                                selectedButtonStyle = {{backgroundColor : activeButtonColor}}
                                buttonStyle={{backgroundColor : inActiveButtonColor}}
                                onPress={this.updateIndex}
                                selectedIndex={selectedIndex}
                                buttons={buttons}
                                containerStyle={index.buttonGroup}/>
                        </MultiButton>
                        <SingleButton text='بر اساس صنف'/>
                        <SingleButton text='به میزان علاقه مندی کاربران'/>
                        <MultiButton text='تصاویر' btn1='نمایش داده شوند' btn2='نمایش داده نشوند'/>
                        <SingleButton text='نمایش بر اساس به روز ترین پست ها'/>
                        <TextInput placeholder='شهر مورد نظر خود را برای جستجو وارد کنید'
                                   placeholderTextFontFamily="IRANSansMobile(FaNum)"
                                   style={search.input}/>
                    </Content>
                </BaseModal>
            </Container>
        )
    }
}
