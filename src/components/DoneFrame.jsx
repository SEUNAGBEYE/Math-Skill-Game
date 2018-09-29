import React from 'react';
import PropTypes from 'prop-types';


/**
 * Renders the done frame
 * renders Game Over! when the user loose
 * renders Done. Nice! when the users loose
 *
 * @param {props} { doneStatus, resetGame }
 */
const DoneFrame = ({ doneStatus, resetGame }) => (
  <div className="text-center">
    <h2>{doneStatus}</h2>
    <button className="btn btn-secondary" onClick={resetGame}>Play Again</button>
  </div>
);

const propTypes = {
  doneStatus: PropTypes.string,
  resetGame: PropTypes.func.isRequired,
};

DoneFrame.propTypes = propTypes;

DoneFrame.defaultProps = {
  doneStatus: null,
};

export default DoneFrame;
