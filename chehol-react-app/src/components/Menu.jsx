import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="menu">
                {
                    this.props.menu.map(list => (
                        <Link to={`/collections/${list.link}`} key={list.name}>span {list.name}</Link>
                    ))
                }
            </div>
        )
    }
}

export default Menu;