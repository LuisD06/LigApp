import { StyleSheet } from 'react-native';

export const LoginStyle = StyleSheet.create({
    // Containers
    screenContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    titleContainer: {
        flex: 2,
    },
    formContainer: {
        backgroundColor: '#7486E7',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 10,
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
    },
    transparentContainer: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Components
    input: {
        width: 235,
        height: 49,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginBottom: 34,
        paddingLeft: 17,
        paddingTop: 13,
        paddingBottom: 12,
        fontSize: 20
    },
    button: {
        elevation: 5,
        marginTop: 14,
        width: 235,
        height: 49,
        borderRadius: 10,
        backgroundColor: '#2FCCB9',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0,1)',
    },
    // Text
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textShadowColor: 'rgba(0,0,0,.5)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    // Image
    image: {
        resizeMode: 'cover',
    },
});
