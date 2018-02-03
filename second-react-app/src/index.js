import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import data from "./data/Heros.json";

ReactDOM.render(<App heros={data} />, document.getElementById('root'));


registerServiceWorker();
