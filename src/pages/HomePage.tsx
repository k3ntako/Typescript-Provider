import React, { useContext, useEffect, lazy, Suspense } from 'react';
const EpisodeList = lazy<any>(() => import('./EpisodeList'));

import styles from '../App.css';
import { Store } from '../utilities/Store';
import { IAction, IEpisode, IEpisodeListProps } from '../utilities/interfaces';

const Homepage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  })

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes';
    const data = await fetch(URL)
    const dataJSON = await data.json();

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  }

  const toggleFavorite = (episode: IEpisode, episodeInFav: boolean): IAction => {
    return dispatch({
      type: episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV',
      payload: episode,
    });
  }

  const props: IEpisodeListProps = {
    episodes: state.episodes,
    toggleFavorite: toggleFavorite,
    favorites: state.favorites,
  }

  return <section className={styles.episodesLayout}>
    <Suspense fallback={<div>Loading...</div>}>
      <EpisodeList {...props} />
    </Suspense>
  </section>
};

export default Homepage;