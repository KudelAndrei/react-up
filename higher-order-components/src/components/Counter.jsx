import React from 'react';

function Counter() {
	return(
		<div className="counter">
			<button className="couner-btn counter-btn--down">-</button>
			<span className="couner-value">0</span>
			<button className="couner-btn counter-btn--up">+</button>
		</div>
	)
}

export default Counter;