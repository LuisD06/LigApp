import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    matchsContainer : {
        backgroundColor: '#202124',
        flex: 4,
        borderRadius: 15,
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textShadowColor: 'rgba(0,0,0,.5)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
    },
});
