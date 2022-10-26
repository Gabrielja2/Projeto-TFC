export interface ICreateMatch {
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface IMatch extends ICreateMatch {
  'inProgress': true,
}
