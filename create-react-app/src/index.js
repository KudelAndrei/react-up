import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import registerServiceWorker from './registerServiceWorker';

import data from "./data.json";

ReactDOM.render(<App initDate={data} />, document.getElementById('root'));


registerServiceWorker();
