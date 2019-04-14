import EStyleSheet from 'react-native-extended-stylesheet';

const intro = EStyleSheet.create({
    view: {

        backgroundColor: '$backgroundColor',
        height: '100%'
    },
    renderView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    image: {
        marginBottom: 80,
        width: 150,
        height: 150,
    },
    text: {
        color: '$secondaryTextColor',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        color: '$primaryTextColor',
        fontFamily: 'IRANSansMobile(FaNum)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    },
    badgeView: {
        position: 'absolute',
        padding: 7,
        width: 50,

        backgroundColor: '#fff',
        left: 10,
        top: 10,
        borderRadius: 23,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    badge: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
    },
    dot: {
        backgroundColor: '#ccc'
    },
    activeDot: {
        backgroundColor: '$primaryColor'
    },
    buttonCircle: {
        width: 40,
        height: 40,
        paddingTop: 2,
        backgroundColor: '$primaryColor',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextIcon: {
        color: '#fff',
        backgroundColor: 'transparent',
    }

});

export default intro;