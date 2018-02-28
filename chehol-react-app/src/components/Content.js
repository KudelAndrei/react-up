import React from 'react';
import Home from './Home';
import Collections from './Collections';
import Search from './Search';
import Menu from './Menu';
import FullList from './FullList';

import { Route, Switch } from 'react-router-dom';

import data from '../data/data';

function Content(){
    return(
        <div>
            <Menu menu={data.menu} />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/collections/:topic' component={Collections} />
                <Route path='/collections/:topic/:id' component={FullList} />
                <Route path='/search' component={Search} />
            </Switch>
        </div>
    );
}

export default Content;