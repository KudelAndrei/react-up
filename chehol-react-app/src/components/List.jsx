import React from 'react';
import { Link } from 'react-router-dom';

function List(props){
    return(
        <Link to={`${props.list.type}/${props.list.id}`} >
            <strong>id: {props.list.id} </strong>
            <span>title: {props.list.title}</span>
        </Link>
    );
}

export default List;