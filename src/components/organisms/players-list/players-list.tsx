import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { Player  as PlayerInterface} from '../../../utils/interfaces/player'
import { Player } from '../../molecules/player/player'
import { PlayersListStyle } from './players-list-style'
interface PlayersListProps {
  players: PlayerInterface[]
}
export const PlayersList:FC<PlayersListProps> = ({ players }) => {
  return (
    <ScrollView>
      {
        players.map((player) => {
          return <Player key={player.id} player={player}/>
        })
      }
    </ScrollView>
  )
}