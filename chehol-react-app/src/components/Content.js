import React from 'react';
import Home from './Home';
import Collections from './Collections';
import Search from './Search';
import Menu from './Menu';
import NotFound from './NotFound';
import FullList from './FullList';

import { Route, Switch } from 'react-router-dom';

import data from '../data/data';

function Content(){
    return(
        <div>
            <Menu>{data.menu}</Menu>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/collections/:topic' component={Collections} />
                <Route exact path='/collections/:topic/:id' component={FullList} />
                <Route path='/search' component={Search} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
export default Content;