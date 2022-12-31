import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { PLAYERS } from '../../../constants/players/players'
import { PlayersList } from '../../organisms/players-list/players-list'
import { PlayersStatisticsStyle } from './players-statistics-style'
export const PlayersStatistics = () => {
  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={PlayersStatisticsStyle.wrapper}>
      <Text style={PlayersStatisticsStyle.title}>Estadísticas</Text>
      <PlayersList players={PLAYERS}/>
    </LinearGradient>
  )
}