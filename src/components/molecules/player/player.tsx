import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { Player as PlayerInterface } from '../../../utils/interfaces/player'
import { PlayerStyle } from './player-style'
interface PlayerProps {
  player: PlayerInterface
}
export const Player: FC<PlayerProps> = ({ player }) => {
  return (
    <View style={PlayerStyle.wrapper}>
      <View style={PlayerStyle.teamWrapper}>
        <Text style={PlayerStyle.teamTitle}>{player.team}</Text>
      </View>
      <View style={PlayerStyle.playerWrapper}>
        <View style={PlayerStyle.playerNumberWrapper}>
          <Text style={PlayerStyle.playerNumber}># {player.number}</Text>
        </View>
        <View style={PlayerStyle.playerNameWrapper}>
          <Text style={PlayerStyle.playerName}>{player.name}</Text>
        </View>
        <View style={PlayerStyle.detailsWrapper}>
          <View style={PlayerStyle.detail}>
            <Image style={PlayerStyle.icon} source={require('./../../../assets/img/yellow-card.png')} />
            <Text style={PlayerStyle.detailText}>{player.yellowCards}</Text>
          </View>
          <View style={PlayerStyle.detail}>
            <Image style={PlayerStyle.icon} source={require('./../../../assets/img/red-card.png')} />
            <Text>{player.redCards}</Text>
          </View>
          <View style={PlayerStyle.detail}>
            <Image style={PlayerStyle.icon} source={require('./../../../assets/img/ball-colored.png')} />
            <Text>{player.goals}</Text>
          </View>
        </View>
      </View>

    </View>
  )
}