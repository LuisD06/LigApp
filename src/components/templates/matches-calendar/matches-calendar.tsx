import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MATCHES } from '../../../constants/matches/matches';
import { MatchesList } from '../../organisms/matches-list/matches-list';
import { MatchesCalendarStyle } from './matches-calendar-style';
export const MatchesCalendar = () => {
  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={MatchesCalendarStyle.wrapper}>
      <Text style={MatchesCalendarStyle.title}>Calendario</Text>
      <MatchesList matches={MATCHES}/>
    </LinearGradient>
  );
}