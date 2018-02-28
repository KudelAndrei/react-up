import React from 'react';
import { Link } from 'react-router-dom';

function List(props){
    const toSearch = props.search === undefined ? '' : props.search;

    return(
        <Link to={`${toSearch}${props.list.type}/${props.list.id}`} >
            <span>{props.list.title}</span>
        </Link>
    );
}

export default List;