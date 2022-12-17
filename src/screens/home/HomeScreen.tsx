import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Match } from '../../components/match/Match';
import { HomeStyle } from './HomeStyle';

export const HomeScreen = () => {
    const [matchList, setMatchList] = useState<MatchEntity[]>([]);

    useEffect(
        () => {
            setMatchList([
                new MatchEntity('R.C.D. Mallorca','RCD Espanyol','Mañana','14:00', '1'),
                new MatchEntity('Cadiz','Atlético Madrid','Sáb, 29/10','09:15', '2'),
                new MatchEntity('Almería','Celta de Vigo','Sáb 29/10', '07:00', '3'),
                new MatchEntity('FC Barcelona','Real Madrid','Dom 30/10', '10:00', '4'),
            ]);
        },
        []
    );
    return (
        <View style={HomeStyle.screenContainer}>
            <View style={HomeStyle.titleContainer}>
                <Text style={HomeStyle.title}>Calendario de juegos</Text>
            </View>
            <View style={HomeStyle.matchsContainer}>
                <ScrollView>
                    {
                        matchList.map(match => <Match {...match} key={match.id}/>)
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export class MatchEntity {
    team1: string = '';
    team2: string = '';
    date: string = '';
    id: string = '';
    time: string = '';
    constructor(team1: string, team2: string, date: string, time: string, id: string){
        this.team1 = team1;
        this.team2 = team2;
        this.date = date;
        this.id = id;
        this.time = time;
    }
}