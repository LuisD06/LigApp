import { StyleSheet } from 'react-native';

export const MatchStyle = StyleSheet.create({
    container: {
        borderColor: '#3C4043',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        paddingVertical: 40,
        height: 180,
    },
    teamsContainer: {
        borderRightWidth: 1,
        borderRightColor: '#3C4043',
        width: '75%',
        paddingVertical: 10,
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
    },
    text: {
        color: '#A1A9AE',
    },
});
