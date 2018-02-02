import React from 'react';
import ReactDOM from 'react-dom';
import App from './Сomponent.js'
import registerServiceWorker from './registerServiceWorker';



var data = [
	{
		id: 1,
		name: "Create-react-app",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
		desc: "So far we have only learned one way to update the UI."
	},
	{
		id: 2,
		name: "Angular CLI 4",
		img: "http://blog.ninja-squad.com/assets/images/angular.png",
		desc: "The Angular CLI makes it easy to create an application that already works, right out of the box. It already follows our best practices!"
	},
]


ReactDOM.render(<App objs={data} />, document.getElementById('root'));
registerServiceWorker();
