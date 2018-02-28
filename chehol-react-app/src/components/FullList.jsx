import React from 'react';

import data from '../data/data';

export class FullList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let index = data.lists.findIndex(list => list.id === (Number(this.props.match.params.id)) );
        const list = data.lists.find(list => list.id === index);

        console.log(index,list);
        return(
            <div>
                <h1>Full infa Chehla "{list.title}"</h1>
                <h3>Description:</h3>
                <ul className="desc">
                    <li><strong>id:</strong> {list.id}</li>
                    <li><strong>type:</strong> {list.type}</li>
                    <li><strong>description:</strong> {list.description}</li>
                </ul>
            </div>
        );
    }
}
export default FullList;