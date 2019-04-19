import React from 'react';
import ReactDOM from 'react-dom';

import { Store } from './store';
import Board from './components/Board'
import './styles.css';

function App() {
  return (
    <Store>
      <div className="App">
        <Board />
      </div>
    </Store>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
