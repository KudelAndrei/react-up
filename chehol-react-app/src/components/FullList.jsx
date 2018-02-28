import React from 'react';

import data from '../data/data';

export class FullList extends React.Component{
    constructor(props){
        super(props);
        const chehol = data.lists.findIndex(list => list.id === this.props.match.params.id);
    }

    render(){
        return(
            <div>{chehol.map((item) => <h2>awdawd</h2>)}</div>
        );
    }
}
export default FullList;