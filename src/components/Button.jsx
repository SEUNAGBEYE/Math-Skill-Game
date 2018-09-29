import React from 'react';
import PropTypes from 'prop-types';


/**
 * Render buttons
 *
 * Check if answers are correct
 * Accepts answers
 * Redraws the game
 *
 * @param {props} {
 *   answerIsCorrect, selectedNumbers, checkAnswer, redraw, redraws, acceptAnswer,
 * }
 * @returns Jsx
 */
const Button = ({
  answerIsCorrect, selectedNumbers, checkAnswer, redraw, redraws, acceptAnswer,
}) => {
  let button;
  switch (answerIsCorrect) {
    case true:
      button = <button className="btn btn-success" onClick={acceptAnswer}><i className="fa fa-check" /></button>;
      break;
    case false:
      button = <button className="btn btn-danger"><i className="fa fa-times" /></button>;
      break;
    default:
      button = (
        <button
          className="btn"
          disabled={selectedNumbers.length === 0}
          onClick={checkAnswer}
        >
      		=
        </button>
      );
      break;
  }

  return (
    <div className="col-2 text-center">
      {button}
      <br />
      <br />
      <button
        className="btn btn-warning btn-sm"
        onClick={redraw}
        disabled={!redraws}
      >
        <i className="fa fa-refresh" />
         {redraws}
      </button>
    </div>
  );
};

const propTypes = {
  redraw: PropTypes.func.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  acceptAnswer: PropTypes.func.isRequired,
  redraws: PropTypes.number.isRequired,
  answerIsCorrect: PropTypes.bool,
  selectedNumbers: PropTypes.PropTypes.arrayOf(PropTypes.number).isRequired,
};

Button.propTypes = propTypes;

Button.defaultProps = {
  answerIsCorrect: null,
};

export default Button;
