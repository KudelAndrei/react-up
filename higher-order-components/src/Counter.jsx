import React from 'react';

function Counter({ counter, countUp, countDown }) {
	return(
		<div className="counter">
			<button className="couner-btn counter-btn--down" onClick={countDown}>-</button>
			<span className="couner-value">{counter}</span>
			<button className="couner-btn counter-btn--up" onClick={countUp}>+</button>
		</div>
	)
}

export default Counter;