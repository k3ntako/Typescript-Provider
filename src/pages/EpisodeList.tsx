import React from 'react';

import styles from '../App.css';
import { IEpisode, IEpisodeListProps } from '../utilities/interfaces';

//JSX.Element[] is the same as Array<JSX.Element>
export default (props: IEpisodeListProps):JSX.Element[] => {
  const { episodes, favorites, toggleFavorite, store } = props;
  const { state, dispatch } = store;
  
  return episodes.map((episode: IEpisode): JSX.Element => {
    if (!episode.season || !episode.name || !episode.image || !episode.image.medium) {
      return null;
    }

    const episodeInFav: boolean = favorites.includes(episode);

    return <section key={episode.id} className={styles.episodeBox}>
      <img src={episode.image.medium} alt={episode.name} />
      <div>
        <a href={episode.url} target="_blank">
          {episode.name}
        </a>
      </div>
      <section className={styles.episodeInfo}>
        <div>Season: {episode.season} Episode: {episode.number}</div>
        <button type="button" onClick={() => toggleFavorite(dispatch, state, episode )}>
          {episodeInFav ? 'Unfav' : 'Fav'}
        </button>
      </section>
    </section>
  })
}