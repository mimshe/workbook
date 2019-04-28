import React, {Component} from 'react';
import {View} from 'react-native'
import Text from "./Common/Text";

export default class App extends Component {
    render() {
        return (
            <View style={styles.talkBubble}>
                <View style={styles.talkBubbleSquare} >
                    <Text h6 color = 'white' >جهت انتخاب از روی نقشه کلیک کنید</Text>
                </View>
                <View style={styles.talkBubbleTriangle}/>
            </View>
        )
    }
}
const styles = ({
    talkBubble: {
        backgroundColor: 'transparent',
        alignItems : 'center',
        justifyContent:'center',
        flex : 1
    },
    talkBubbleSquare: {
        width: 200,
        height: 25,
        backgroundColor: '#5a5a5a',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    talkBubbleTriangle: {
        marginRight : 145,
        marginTop : -7,
        borderTopColor: 'transparent',
        borderTopWidth: 9,
        borderTopLeftRadius : 10,
        borderRightWidth: 15,
        borderRightColor: '#5a5a5a',
        borderBottomWidth: 9,
        borderBottomColor: 'transparent',
        transform: [
            {rotate: '90deg'}
        ]
    }
});