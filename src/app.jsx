import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './components/Game';

const App = () => (
  <div>
    <Game />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
