import React, { Component } from 'react';
import Menu from "./components/Menu";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <p>This App page </p>
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
