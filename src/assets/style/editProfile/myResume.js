import EStyleSheet from 'react-native-extended-stylesheet'

const myResume = EStyleSheet.create({
    educationView: {
        borderWidth: .8,
        borderColor: '#797a76',
        alignSelf: "stretch",
        marginBottom : 20
    },
    educationInsideView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        alignItems: 'center',
        height : 60,
    },
    separator: {
        width: .8,
        height: 30,
        backgroundColor: '$secondaryColor',
        marginLeft: 10
    },
    inputAddress: {
        margin: 5,
        flex: .7,
        height: 40,
        fontFamily: '$fontFamily',
        fontSize: 14,
        textAlign: 'left',
        alignItems: 'center',
        paddingLeft: 10,

    },
    addButton : {
        backgroundColor : '#d6d6d6' ,
        width : 20 ,
        height: 20 ,
        alignItems : 'center' ,
        justifyContent : 'center' ,
        borderRadius : 2
    },
    addIcon : {
        fontSize : 16
    },
    removeButton : {
        backgroundColor : '#40d623' ,
        width : 60 ,
        marginLeft : 5,
        height: 20 ,
        alignItems : 'center' ,
        justifyContent : 'center' ,
        borderRadius : 2
    }
});

export default myResume;