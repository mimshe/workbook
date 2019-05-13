import React, {Component} from 'react'
import {Container, Header, Icon, View, Textarea, Form} from 'native-base'
import settingProfile from "../../assets/style/main/settingProfile";
import {TouchableOpacity, Image, TextInput} from "react-native";
import BadgeWrite from "../../components/BadgeWrite";
import {Content} from 'native-base'
import Text from "../../components/Common/Text";
import home from '../../assets/style/main/home'
import StarRating from 'react-native-star-rating';
import BaseModal from "../../components/modal/BaseModal";
import TwoButton from "../../components/modal/TwoButton";
import SingleButton from "../../components/modal/SingleButton";

export default class Home extends Component {
    state = {
        title: 'عنوان پروفایل کسب و کار',
        starCount: 2.5,
    };

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    _showComment = () => {
      Actions.replace('comment')
    };

    render() {
        return (
            <Container>
                <Header style={settingProfile.header}>
                    <View style={settingProfile.headerInside}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name='md-keypad' style={settingProfile.keyIcon}/>
                            </TouchableOpacity>
                            <Icon name='md-create' style={settingProfile.pencilIcon}/>
                            <View style={settingProfile.headerBadge}>
                                <BadgeWrite/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name='md-add' style={{color: '#f1f1f1', fontSize: 20, marginRight: 10}}/>
                            </TouchableOpacity>
                            <View style={{
                                backgroundColor: '#cbcbcb',
                                width: 20,
                                height: 20,
                                borderRadius: 10,
                                marginRight: 10
                            }}/>
                            <View style={{backgroundColor: 'gray', width: 20, height: 20, borderRadius: 10}}/>
                        </View>
                    </View>
                </Header>
                <Content>
                    <View style={home.userBar}>
                        <View style={home.user}>
                            <Image source={require('../../assets/images/logo.png')}
                                   style={home.thumbnail}/>
                            <Text h7 color='black' style={home.username}>{this.state.title}</Text>
                        </View>
                        <View>
                            <Icon name='ios-more'/>
                        </View>
                    </View>

                    <View style={home.postImage}/>

                    <View style={home.statusBar}>
                        <View style={home.rateBarView}>
                            <StarRating
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'#e8d600'}
                                starSize={23}
                            />
                        </View>
                        <View style={home.leftSideStatusBar}>
                            <TouchableOpacity style={home.commentButtonView} onPress = {this._showComment}>
                                <Text h6>256</Text>
                                <Icon name='md-chatbubbles' style={home.commentIcon}/>
                            </TouchableOpacity>
                            <View style={home.likeButtonView}>
                                <Text h6>152</Text>
                                <Icon name='md-heart' style={home.likeIcon}/>
                            </View>
                        </View>

                    </View>

                    <View style={home.buttonGroup}>
                        <TouchableOpacity style={home.addButton} onPress={() => this.modal._toggleModal()}>
                            <Text h6 color='black'>+</Text>
                        </TouchableOpacity>
                        <View style={home.infoButton}>
                            <Text h7 color='white'>خریدار کالا</Text>
                        </View>
                        <View style={home.priceButton}>
                            <Text h7 color='white'>قیمت 25400 تومان - نقدی</Text>
                        </View>
                    </View>

                    <View>
                        <View style={home.infoBox}>
                            <View style={home.infoView}>
                                <Text h7 color='black'> موجود در دسته بندی کالای الکتریکی</Text>
                            </View>
                            <View style={home.infoView}>
                                <Text h7 color='black'> گروه خدمات برقی</Text>
                            </View>
                        </View>
                        <View style={home.infoBox}>
                            <View style={home.infoView}>
                                <Text h7 color='black'> نوع کالا : لوازم برقی</Text>
                            </View>
                            <View style={home.infoView}>
                                <Text h7 color='black'> دارای گارانتی می باشد</Text>
                            </View>
                        </View>
                        <TextInput
                            placeholder='استان / شهر / ناحیه / آدرس محلی'
                            style={home.inputAddress}/>
                    </View>
                    <Form style={home.textArea}>
                        <Textarea style={home.textAreaStyle} rowSpan={4} placeholder="توضیحات تکمیلی ..."/>
                    </Form>
                    <View>
                        <View style={home.commentBoxView}>
                            <Icon name='md-chatbubbles' style={home.commentBoxIcon}/>
                            <Text h6 color='#db6149' style={home.commentBoxTitle}>نظرات</Text>
                            <Text h6 color='#db6149' style={home.commentBoxCount}> 321</Text>
                        </View>
                        <View style={home.commentBoxText}>
                            <Text h7 color='black'>Masoud</Text>
                            <Text h7 color='black'> - ورک بوک ورک بوک ورک بوک</Text>
                            <StarRating
                                containerStyle={{marginLeft: 5}}
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'#e8d600'}
                                starSize={14}
                            />
                        </View>
                        <View style={home.commentBoxText}>
                            <Text h7 color='black'>Masoud</Text>
                            <Text h7 color='black'> - ورک بوک ورک بوک ورک بوک</Text>
                            <StarRating
                                containerStyle={{marginLeft: 5}}
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'#e8d600'}
                                starSize={14}
                            />
                        </View>
                        <View style={home.commentBoxText}>
                            <Text h7 color='black'>Masoud</Text>
                            <Text h7 color='black'> - ورک بوک ورک بوک ورک بوک</Text>
                            <StarRating
                                containerStyle={{marginLeft: 5}}
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'#e8d600'}
                                starSize={14}
                            />
                        </View>

                        <View style={home.tagView}>
                            <View style={home.tag}>
                                <Text h7 color='black'>#برچسب</Text>
                            </View>
                            <View style={home.tag}>
                                <Text h7 color='black'>#برچسب</Text>
                            </View>
                            <View style={home.tag}>
                                <Text h7 color='black'>#برچسب</Text>
                            </View>
                            <View style={home.tag}>
                                <Text h7 color='black'>#برچسب</Text>
                            </View>
                            <View style={home.tag}>
                                <Text h7 color='black'>#برچسب</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                <BaseModal title='تنظیمات کاربر' ref={(ref) => this.modal = ref}>
                    <TwoButton text='پروفایل ها' btn1='مشتری ایشان شوید' btn2='برگزیده‌به‌عنوان‌صاحبان‌کسب‌و‌کار'/>
                    <SingleButton text='پست های این کاربر را دیگر به من نشان نده'/>
                    <SingleButton text='هر زمان پست گذاشته شد به من اطلاع بده'/>
                </BaseModal>
            </Container>
        )
    }
}