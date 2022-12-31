import React from 'react'
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FINISHED_MATCHES } from '../../../constants/matches/finished-matches';
import { MatchesList } from '../../organisms/matches-list/matches-list';
import { FinishedMatchesStyle } from './finished-matches-style';
export const FinishedMatches = () => {
  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={FinishedMatchesStyle.wrapper}>
      <Text style={FinishedMatchesStyle.title}>Partidos</Text>
      <MatchesList matches={FINISHED_MATCHES}/>
    </LinearGradient>
  );
}