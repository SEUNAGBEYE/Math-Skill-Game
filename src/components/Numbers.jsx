import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

/**
 * Number componet
 * renders the available numbers
 *
 * @param {props} selectedNumbers
 * @param {props} usedNumbers
 * @returns JSX
 */
const Numbers = ({ selectedNumbers, usedNumbers, selectNumber }) => {
  // Use the lodash range func to generate this sequence
  const arrayOfNumbers = range(1, 10);
  const numberClassName = (num) => {
    if (usedNumbers.includes(num)) {
      return 'used';
    }

    if (selectedNumbers.includes(num)) {
      return 'selected';
    }
  };
  return (
    <div className="card text-center">
      <div>
        {
            arrayOfNumbers.map((num, index) => (
              <span
                key={index}
                className={numberClassName(num)}
                onClick={() => selectNumber(num)}
              >
                {num}
              </span>
            ))
          }
      </div>
    </div>
  );
};

const propTypes = {
  selectNumber: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.PropTypes.arrayOf(PropTypes.number).isRequired,
  usedNumbers: PropTypes.PropTypes.arrayOf(PropTypes.number).isRequired,
};
Numbers.propTypes = propTypes;

export default Numbers;
