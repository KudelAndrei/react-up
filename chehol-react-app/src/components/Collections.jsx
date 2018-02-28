import React from 'react';
import List from './List';
import data from '../data/data';

function Collections(props){
    return(
        <div className='collcetions'>
            {
                data.lists.map(list => (
                    list.type === props.match.params.topic &&
                    <List key={list.id} list={list} />
                ))
            }
        </div>
    );
}

export default Collections;