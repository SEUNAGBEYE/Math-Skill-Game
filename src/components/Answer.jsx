import React from 'react'

const Answer = (props) => {
	return(
  	<div className="col-5">
    	{props.selectedNumbers.map((num, index) => 
      <span key={index} onClick={() => props.unselectNumber(num)}>{num}</span>)}
  	</div>
  )
}

export default Answer