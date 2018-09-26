import React from 'react'

const Stars = (props) => {
    let stars = [
            ...Array(props.randomNumberOfStars).keys()
        ].map((star, index) => <i key={index} className="fa fa-star"></i>);
      return(
        <div className="col-5">
          {stars}
        </div>
    )
  }

export default Stars