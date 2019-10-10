import React, { useReducer } from 'react';
import { IState, IAction } from './interfaces';

const initialState:IState = {
  episodes: [],
  favorites: [],
};
export const Store = React.createContext<IState | any>(initialState);

const reducer = (state:IState, action:IAction ): IState => {
  switch (action.type){
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAV':
      const newFavorites = state.favorites.filter(episode => episode.id !== action.payload.id)
      return { ...state, favorites: newFavorites };
    default:
      return state;
  }
}

export const StoreProvier = (props:any): JSX.Element => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>
    { props.children }
  </Store.Provider>
}