import React from 'react';
import { MatchEntity } from '../../screens/home/HomeScreen';
import { View, Text } from 'react-native';
import { MatchStyle } from './MatchStyle';

export const Match = (match: MatchEntity) => {
    return (
        <View style={MatchStyle.container}>
            <View style={MatchStyle.teamsContainer}>
                <Text style={MatchStyle.text}>{match.team1}</Text>
                <Text style={MatchStyle.text}>{match.team2}</Text>
            </View>
            <View style={MatchStyle.dateContainer}>
                <Text style={MatchStyle.text}>{match.date}</Text>
                <Text style={MatchStyle.text}>{match.time}</Text>
            </View>
        </View>
    );
}