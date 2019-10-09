import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvier } from './Store';
import App from './App';

const root = document.getElementById("app");
ReactDOM.render(
  <StoreProvier><App /></StoreProvier>, 
  root
);
