import React from "react";
import Page from "./Page";
import Statistic from "./Statistic";
import Books from "./Books";
import NotFound from "./NotFound";
import {Route, Switch} from "react-router-dom";

function Router(){
    return(
        <Switch>
            <Route exact path="/" component={Page} />
            <Route path="/statistic" component={Statistic} />
            <Route path="/books" component={Books} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Router;