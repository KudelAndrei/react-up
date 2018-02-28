import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Page from "./Page";
import Books from "./Books";
import Statistic from "./Statistic";


function Content(){
    return(
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/statistic' component={Statistic}/>
          <Route path='/page' component={Page}/>
          <Route path='/books' component={Books}/>
        </Switch>
    )
}

export default Content;