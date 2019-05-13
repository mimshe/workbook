import React, {Component} from 'react'
import {Container, Header, Icon, View, Content} from 'native-base'
import index from "../../assets/style/followers";
import Text from "../../components/Common/Text";
import {primaryColor} from "../../helper/colors";
import CommentPost from "../../components/CommentPost";
import comment from '../../assets/style/main/comment'
import {TextInput, TouchableOpacity} from "react-native";
import StarRating from "react-native-star-rating";

export default class Comment extends Component {
    state = {
        starCount: 2.5,
    };

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <Container>
                <Header style={index.header}>
                    <View style={index.headerInside}>
                        <Icon name='ios-arrow-forward' style={{color: '#dddddd'}}/>
                        <Text h6 color={primaryColor} style={{marginLeft: 10}}>ارسال نظر </Text>

                    </View>
                </Header>
                <Content padder>
                    <CommentPost/>
                    <CommentPost/>
                    <CommentPost/>
                    <CommentPost/>

                </Content>
                <View style={comment.sendView}>
                        <TextInput
                            placeholderTextColor = 'white'
                            numberOfLines={1}
                            maxLength = {255}
                            maxFontSizeMultiplier = {2}
                            placeholder='نوشتن نظر ...'
                            style={comment.input}/>

                    <View style={comment.sendViewBottom}>
                        <View>
                            <TouchableOpacity style={comment.sendButton}>
                                <Icon name='md-send' style={comment.sendButtonIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {comment.ratingView}>
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
                                starSize={16}
                            />
                        </View>
                    </View>
                </View>
            </Container>
        )
    }
}