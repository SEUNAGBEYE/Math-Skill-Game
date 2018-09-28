import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the Answer component
 *
 * @param {props} selectedNumbers
 */
const Answer = ({ selectedNumbers, unselectNumber }) => (
  <div className="col-5">
    {
      selectedNumbers.map(
        (num, index) => (
          <span key={index} onClick={() => unselectNumber(num)}>
            {num}
          </span>
        ),
      )
    }
  </div>
);

const propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  unselectNumber: PropTypes.func.isRequired,
};

Answer.propTypes = propTypes;

export default Answer;
