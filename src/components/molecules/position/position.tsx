import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { Team } from './../../../utils/interfaces/team';
import { PositionStyle } from './position-style';
interface PositionProps {
  team: Team
}
export const Position:FC<PositionProps> = ({ team }) => {
  return (
    <View style={PositionStyle.wrapper}>
      <View style={PositionStyle.resultWrapper}> 
        <View style={PositionStyle.teamWrapper}>
          <Text style={PositionStyle.position}>{team.position}</Text>
          <View style={PositionStyle.imageWrapper}>
            <Image style={PositionStyle.image} source={{uri: team.logo}}/>
            <Text style={PositionStyle.title}>{team.shortName}</Text>
          </View>
        </View>
        <View style={PositionStyle.detailsWrapper}>
          <Text style={PositionStyle.detail}>{team.playedGames}</Text>
          <Text style={PositionStyle.detail}>{team.wins}</Text>
          <Text style={PositionStyle.detail}>{team.ties}</Text>
          <Text style={PositionStyle.detail}>{team.defeats}</Text>
          <Text style={PositionStyle.detail}>{team.scoredGoals}</Text>
          <Text style={PositionStyle.detail}>{team.againstGoals}</Text>
          <Text style={PositionStyle.detail}>{team.goalDifference}</Text>
          <Text style={[PositionStyle.detail, PositionStyle.detailLarge]}>{team.points}</Text>
        </View>
      </View>
      <View style={PositionStyle.winsWrapper}>
        {
          team.lastFiveMatches.map((match, index) => {
            let rounded = index === team.lastFiveMatches.length - 1;
            if (match.result === 'win') {
              return <View 
                key={Math.random() * 16} 
                style={[PositionStyle.matchResult, PositionStyle.matchWin, rounded && PositionStyle.rounded]}>
              </View>
            }
            if (match.result === 'defeat') {
              return <View 
                key={Math.random() * 16} 
                style={[PositionStyle.matchResult, PositionStyle.matchDefeat, rounded && PositionStyle.rounded]}></View>
            }
            return <View 
              key={Math.random() * 16}
               style={[PositionStyle.matchResult, rounded && PositionStyle.rounded]}></View>
          })
        }
      </View>
    </View>
  )
}