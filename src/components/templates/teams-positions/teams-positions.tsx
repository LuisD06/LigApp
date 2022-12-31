import React from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TEAMS } from '../../../constants/teams/teams'
import { PositionList } from '../../organisms/positions-list/positions-list'
import { TeamsPositionsStyle } from './teams-positions-style'
export const TeamsPositions = () => {
  return (
    <LinearGradient colors={['#002B4A', '#041E31']} style={TeamsPositionsStyle.wrapper}>
      <Text style={TeamsPositionsStyle.title}>Posiciones</Text>
      <View style={TeamsPositionsStyle.header}>
        <View style={TeamsPositionsStyle.teamHeader}>
          <Text style={TeamsPositionsStyle.teamPositionHeader}>P</Text>
          <Text style={TeamsPositionsStyle.teamNameHeader}>Club</Text>
        </View>
        <View style={TeamsPositionsStyle.resultHeader}>
          <Text style={TeamsPositionsStyle.detailHeader}>J</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>G</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>E</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>P</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>GF</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>GC</Text>
          <Text style={TeamsPositionsStyle.detailHeader}>DG</Text>
          <Text style={[TeamsPositionsStyle.detailHeader, TeamsPositionsStyle.detailHeaderLarge]}>Pts</Text>
        </View>
      </View>
      
      <PositionList teams={TEAMS}/>
    </LinearGradient>
  )
}