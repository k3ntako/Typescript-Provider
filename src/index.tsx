import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvier } from './utilities/Store';
import { Router, RouteComponentProps } from '@reach/router';

import App from './App';
import HomePage from './pages/HomePage';
import FavPage from './pages/FavPage';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

const root = document.getElementById("app");
ReactDOM.render(
  <StoreProvier>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<FavPage />} path='/faves' />
      </App>
    </Router>
  </StoreProvier>, 
  root
);
