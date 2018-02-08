import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from "./Tooltip.jsx";
import "./styel.css";
import registerServiceWorker from './registerServiceWorker';


function App() {
	return(
		<div>
			<div><Tooltip text="simple text">tooltip</Tooltip></div>
			<div>Simpla lorem		loerw wdawdaw <Tooltip text="Tooltip two">tooltip 2</Tooltip></div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
