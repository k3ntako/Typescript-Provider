import { IAction, IEpisode, IState, Dispatch } from '../utilities/interfaces';

export const fetchDataAction = async (dispatch:Dispatch) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes';
  const data = await fetch(URL)
  const dataJSON = await data.json();

  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  })
}

export const toggleFavorite = (dispatch:Dispatch, state:IState, episode: IEpisode): IAction => {  
  const episodeInFav = state.favorites.includes(episode);

  return dispatch({
    type: episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV',
    payload: episode,
  });
}