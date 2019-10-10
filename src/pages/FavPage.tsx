import React, { useContext, lazy, Suspense } from 'react';
const EpisodeList = lazy<any>(() => import('./EpisodeList'));

import styles from '../App.css';
import { IEpisodeListProps } from '../utilities/interfaces';
import { toggleFavorite } from '../utilities/Actions';
import { Store } from '../utilities/Store';

const FavPage = () => {
  const { state, dispatch } = useContext(Store);
  const props: IEpisodeListProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavorite: toggleFavorite,
    favorites: state.favorites,
  }

  return <Suspense fallback={<div>Loading...</div>}>
    <section className={styles.episodesLayout}>
      <EpisodeList {...props} />
    </section>
  </Suspense>
};

export default FavPage;