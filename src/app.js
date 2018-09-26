import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game'
import 'react-bootstrap'
import './styles/main.css';
import './styles/style.scss';

class App extends React.Component{
	render(){
  	return(
      <div>
        <Game />
      </div>
    )
  }
}

    
ReactDOM.render(<App/>, document.getElementById('app'));