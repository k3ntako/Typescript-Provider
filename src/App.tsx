import React, { useContext } from 'react';
import { Link } from '@reach/router';

import styles from './App.css';
import { Store } from './utilities/Store';

const App = (props: any): JSX.Element => {
  const { state } = useContext(Store);

  return <div>
    <header className={styles.header}>
      <div>
        <h1>Friends!</h1>
        <p>Pick your favorite episodes!</p>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/faves">Faves</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </div>
    </header>
    { props.children }
  </div>
}

export default App;
