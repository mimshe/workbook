import React, {Component} from 'react'
import EStyleSheet from "react-native-extended-stylesheet";
import {View} from 'native-base'
import {Image} from 'react-native'
import Text from "./Common/Text";
import StarRating from "react-native-star-rating";

export default class CommentPost extends Component {
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
            <View style = {styles.container}>
                <View style={styles.userBar}>
                    <Image style={styles.avatar} source={require('../assets/images/logo.png')}/>
                    <Text h6 style={styles.title}>عنوان</Text>
                    <StarRating
                        containerStyle={styles.rating}
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
                <View style={styles.comment}>
                    <Text h7>ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک
                        بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک ورک بوک </Text>
                </View>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container : {
        backgroundColor : '#e9e9e9',
        marginTop : 10
    },
    userBar: {
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 150,
        padding : 5
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 17.5
    },
    title: {
        marginLeft: 10
    },
    rating: {
        marginLeft: 20
    },
    comment: {
        padding : 5
    }
});