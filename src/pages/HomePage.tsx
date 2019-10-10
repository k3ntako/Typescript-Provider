import React, { useContext, useEffect, lazy, Suspense } from 'react';
const EpisodeList = lazy<any>(() => import('./EpisodeList'));

import styles from '../App.css';
import { Store } from '../utilities/Store';
import { IEpisodeListProps } from '../utilities/interfaces';
import { fetchDataAction, toggleFavorite } from '../utilities/Actions';

const Homepage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  })

  const props: IEpisodeListProps = {
    episodes: state.episodes,
    store: {state, dispatch},
    toggleFavorite: toggleFavorite,
    favorites: state.favorites,
  }

  return <Suspense fallback={<div>Loading...</div>}>
    <section className={styles.episodesLayout}>
      <EpisodeList {...props} />
    </section>
  </Suspense>
};

export default Homepage;