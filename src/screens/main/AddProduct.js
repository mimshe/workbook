import React, {Component} from 'react'
import {Container, Header, Icon, View , Content} from 'native-base'
import index from "../../assets/style/followers";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import addProduct from '../../assets/style/main/addProduct'

export default class AddProduct extends Component {
    render() {
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color: '#dddddd'}}/>
                        <Text h7 style={index.headerTitle} color={primaryColor}>ثبت کالا - نیازمند خرید این کالا هستم</Text>
                    </View>
                </Header>
                <Content padder>
                    <View style = {addProduct.container}>
                        <View style = {addProduct.addView}>
                            <Icon name = 'md-add' style = {addProduct.addIcon}/>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}
