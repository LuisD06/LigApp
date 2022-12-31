export interface Team {
  id?:number
  position?: number
  logo?: string
  name: string
  shortName?: string
  playedGames: number
  wins: number
  ties: number
  defeats: number
  scoredGoals: number
  againstGoals: number
  goalDifference: number
  points: number,
  lastFiveMatches: lastMatch[] 
}
export interface lastMatch {
  id: number
  result: 'win' | 'defeat' | 'draw'
}