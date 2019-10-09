import React, { useContext, useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
const EpisodeList = lazy<any>(() => import('./EpisodeList'))

import styles from './App.css';
import { Store } from './Store';
import { IAction, IEpisode } from './interfaces';

const App = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  })

  const fetchDataAction = async () =>{
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes';
    const data = await fetch(URL)
    const dataJSON = await data.json();
    
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  }

  const toggleFavorite = (episode:IEpisode, episodeInFav:boolean):IAction => {
    return dispatch({
      type: episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV',
      payload: episode,
    });
  }

  const props = {
    episodes: state.episode,
    toggleFavorite: toggleFavorite,
    favorite: state.favorite,
  }
  
  return <div>
    <header className={styles.header}>
      <div>
        <h1>Friends!</h1>
        <p>Pick your favorite episodes!</p>
      </div>
      <div>
        <p>Favorited: {state.favorites.length} episode(s)</p>
      </div>
    </header>
    <section className={styles.episodesLayout}>
      <Suspense  fallback={<div>Loading...</div>}>
        <EpisodeList episodes={state.episodes} favorites={state.favorites} toggleFavorite={toggleFavorite} />
      </Suspense>
    </section>
  </div>
}

export default App;
