import React from 'react';
import range from 'lodash/range'

const Numbers = (props) => {
	// Use the lodash range func to generate this sequence 	
	const arrayOfNumbers = range(1, 10);
  const numberClassName = (num) => { 
  	
    if(props.usedNumbers.includes(num)){
    	return 'used';
    }
    
  	if(props.selectedNumbers.includes(num)){
    	return 'selected';
    }
     
  } 
	return(
  	<div className="card text-center">
			<div>
				{
        	arrayOfNumbers.map((num, index) => 
          <span key={index} className={numberClassName(num)}
          	onClick={() => props.selectNumber(num)}
          >{num}</span>)
        }
			</div>
  	</div>
  )
}

export default Numbers