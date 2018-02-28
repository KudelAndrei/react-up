import React from 'react';
import { Link } from 'react-router-dom';

function List(props){
    return(
        <Link to={`${props.list.type}/${props.list.id}`} >
            <span>{props.list.title}</span>
        </Link>
    );
}

export default List;