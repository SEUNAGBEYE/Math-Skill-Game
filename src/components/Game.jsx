import React from 'react';
import range from 'lodash/range'

import Answer from './Answer'
import Button from './Button'
import Stars from './Stars'
import Numbers from './Numbers'
import DoneFrame from './DoneFrame'

import possibleCombinationSum from '../utilities/possibleCombinationSum'

/**
 *
 *
 * @class Game
 * @extends {React.Component}
 */
class Game extends React.Component{

static randomNumber = () => 1 + Math.floor(Math.random() * 9)
  
  static initialState = () => ({
	  selectedNumbers: [],
	  usedNumbers: [],
	  randomNumberOfStars: Game.randomNumber(),
	  answerIsCorrect: null,
	  redraws: 5,
	  doneStatus: null
  	});
	
  state = Game.initialState()
  
  resetGame = () => {
  	this.setState(Game.initialState())
  }
  
  selectNumber = (clickedNumber) => {
		if (!this.state.selectedNumbers.includes(clickedNumber) ){ 
	  this.setState(prevState => ({
	  	answerIsCorrect: null,
		selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
	  }))
	}
  }
  
  unselectNumber = (clickedNumber) => {
	this.setState(prevState => ({
	  answerIsCorrect: null,
	  selectedNumbers: prevState.selectedNumbers.filter(num => num !== clickedNumber)
	}))
  }
  
  checkAnswer = () => {
	this.setState(prevState => ({
	  answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, num) => acc + num, 0)
	}))
  }
  
   acceptAnswer = () => {
		  this.setState(prevState => ({
	  	usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
		selectedNumbers: [],
	  	answerIsCorrect: null,
		randomNumberOfStars: Game.randomNumber(),
	  }), this.updateDoneStatus)
	  
   }
   
	 
  redraw = () => {
  	if (this.state.redraws){
	  this.setState(prevState => ({
			answerIsCorrect: null,
			selectedNumbers: [],
			randomNumberOfStars: Game.randomNumber(),
			redraws: prevState.redraws - 1
		}), this.updateDoneStatus)
	}
  }
  
  updateDoneStatus = () => {
  	this.setState(prevState => {
		if (prevState.usedNumbers.length === 9) {
	  	return { doneStatus: 'Done. Nice!' }
	  }
	  
	  if (!prevState.redraws && !this.possibleSolutions(prevState)){
	  	return { doneStatus: 'Game Over!' }
	  }
	})  
  }
  
  possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
  	const possibleNumbers = range(1, 10).filter(num => !usedNumbers.includes(num));
	
	return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  }
  
	render(){
  	const { 
		randomNumberOfStars, 
	  selectedNumbers,
	  answerIsCorrect,
	  usedNumbers,
	  redraws,
	  doneStatus
	} = this.state;
  	return(
	  <div className="container">
		<h3>Play Nine</h3>
		<hr />
		<div className="row">
		  <Stars randomNumberOfStars={randomNumberOfStars}/>
		  <Button selectedNumbers={selectedNumbers} 
		  	checkAnswer={this.checkAnswer}
			answerIsCorrect={answerIsCorrect}
			acceptAnswer={this.acceptAnswer}
			redraw={this.redraw}
			redraws={redraws}
		  />
		  <Answer selectedNumbers={selectedNumbers}
		  	unselectNumber={this.unselectNumber}
		  />
		</div>
		<br />
		{
			doneStatus ?
				<DoneFrame doneStatus={doneStatus} resetGame={this.resetGame}/>
			:
			<Numbers selectedNumbers={selectedNumbers}
			  selectNumber={this.selectNumber}
			  usedNumbers={usedNumbers}
			/>        
		}
	  </div>
	)
  }
}

export default Game
