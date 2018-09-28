import React from 'react';
import Stars from './Stars';
import Numbers from './Numbers'


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
		if (!this.state.selectedNumbers.includes(clickedNumber) ){ 
	  this.setState(prevState => ({
	  	answerIsCorrect: null,
		selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
	  }))
	}
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
      usedNumbers
    } = this.state;
    return(
        <div className="container">
            <h3>Play Nine</h3>
            <hr />
            <div className="row">
		          <Stars randomNumberOfStars={randomNumberOfStars}/>
              <Numbers selectedNumbers={selectedNumbers}
                selectNumber={this.selectNumber}
                usedNumbers={usedNumbers}
			        /> 
		        </div>
        </div>
    )
  }
}

export default Game
