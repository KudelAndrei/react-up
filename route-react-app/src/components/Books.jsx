import React from "react";
import {Route, Switch, NavLink} from "react-router-dom";

function Book({match}){
    const topic = match.params.topic;
    return(
        <div className="book">
        {console.log(topic)}
            {todos[topic].map(book => 
                <NavLink to={`${match.url}/${book.id}`} >{book.name}</NavLink>
            )}
        </div>
    )
};

const FullBook = ({match}) => (
    <div>id: {match.id}</div>
);

const todos = [
{
    "id": 1,
    "git": '',
    "name": "name"
},
{
    "id": 2,
    "git": '',
    "name": "name1"
},
{
    "id": 3,
    "git": '',
    "name": "name 2"
},
{
    "id": 4,
    "git": '',
    "name": "name 3"
},
{
    "id": 5,
    "git": '',
    "name": "name 4"
},
{
    "id": 6,
    "git": '',
    "name": "name 6"
},
{
    "id": 7,
    "git": '',
    "name": "name 8"
},

];

function Books({match}){
    return(
        <section className="books">
            <div className="submenu">
                <NavLink to={`${match.url}/popular`} activeClassName="selected">Popular</NavLink>
                <NavLink to={`${match.url}/all`} activeClassName="selected" >All</NavLink>
                <NavLink to={`${match.url}/git`} activeClassName="selected" >Git</NavLink>
            </div>
            <section>
                <Route path={`${match.url}/:topic`} component={Book} />
            </section>
        </section>
    )
}

export default Books;