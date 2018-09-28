import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ randomNumberOfStars }) => {
  const stars = [
    ...Array(randomNumberOfStars).keys(),
  ].map((star, index) => <i key={index} className="fa fa-star" />);
  return (
    <div className="col-5">
      {stars}
    </div>
  );
};
const propTypes = {
  randomNumberOfStars: PropTypes.number.isRequired,
};

Stars.propTypes = propTypes;

export default Stars;
