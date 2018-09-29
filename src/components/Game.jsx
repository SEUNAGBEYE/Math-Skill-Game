import React from 'react';
import range from 'lodash/range'

import Stars from './Stars';
import Numbers from './Numbers';
import Answer from './Answer';
import Button from './Button';
import DoneFrame from './DoneFrame';
import possibleCombinationSum from '../utilities/possibleCombinationSum'


/**
 *@author Seun Agbeye
 *
 * @class Game
 * @extends {React.Component}
 */
class Game extends React.Component {

  /**
   * Generates a random number between 1-9
   *
   * @static
   * @memberof Game
   */
  static randomNumber = () => 1 + Math.floor(Math.random() * 9)

  /**
   * This returns the component initial state
   *
   * @static
   * @memberof Game
   */
  static initialState = () => ({
      selectedNumbers: [],
      usedNumbers: [],
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      redraws: 5,
      doneStatus: null
  });
    
  state = Game.initialState()

  /**
   * Reset the game state to the initial state
   *
   * @memberof Game
   */
  resetGame = () => {
    this.setState(Game.initialState())
  }

  /**
   * Handle the onclick event on the Number component
   *
   * @param {number} clickedNumber
   */
  selectNumber = (clickedNumber) => {
      if (!this.state.selectedNumbers.includes(clickedNumber) && !this.state.usedNumbers.includes(clickedNumber)){ 
        this.setState(prevState => ({
          answerIsCorrect: null,
          selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
      }
  }

  /**
   * Handle the onclick event on the Answer component
   *
   * @param {number} clickedNumber
   * @memberof Game
   */
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(num => num !== clickedNumber)
    }))
  }

  /**
   * Checks if the answers provided are corrent
   *
   * @memberof Game
   */
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, num) => acc + num, 0)
    }))
  }
  
  /**
   * Accepts correct answers
   *
   * @memberof Game
   */
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber(),
    }), this.updateDoneStatus)
  }
   
	/**
   * Redraw the game
   *
   * @memberof Game
   */
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

/**
 * Updates the status of the game
 *
 * @memberof Game
 */
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
  
  /**
   * Checks for possible solutions
   *
   * @memberof Game
   */
  possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
  	const possibleNumbers = range(1, 10).filter(num => !usedNumbers.includes(num));
	  return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  }

  
  /**
   * Renders the component
   *
   * @returns JSX
   * @memberof Game
   */
  render(){
    const { 
      randomNumberOfStars,
      selectedNumbers,
      usedNumbers,
      redraws,
      answerIsCorrect,
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
        </div>
    )
  }
}

export default Game
