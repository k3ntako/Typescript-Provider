export interface IState{
  episodes: Array<IEpisode>
  favorites: Array<IEpisode>
}
export interface IAction{
  type: string
  payload: any
}

export interface IEpisode{
  id: number
  airdate: string
  airstamp: string
  airtime: string
  image: {medium: string, original: string}
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
};