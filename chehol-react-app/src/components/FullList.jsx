import React, {Fragment} from 'react';
import { Redirect } from 'react-router-dom';

import data from '../data/data';

export class FullList extends React.Component{
    constructor(props){
        super(props);
        this.state = { list: {}, redirect: false };
    }

    componentWillMount(){
        let index = data.lists.findIndex(list => list.id === (Number(this.props.match.params.id)));
        if (data.lists.find(list => list.id === index)){
            this.setState({list: data.lists.find(list => list.id === index)});
        } else {
            this.setState({ redirect: true });
        }
    }

    render(){
        return(
            <Fragment>
            {
                this.state.redirect ?
                    <Redirect to="/not-found"/>
                    :
                <Fragment>
                    <h1>Полная информация чехла "{this.state.list.title}"</h1>
                    <h3>Description:</h3>
                    <ul className="desc">
                        <li><strong>id:</strong> {this.state.list.id}</li>
                        <li><strong>type:</strong> {this.state.list.type}</li>
                        <li><strong>description:</strong> {this.state.list.description}</li>
                    </ul>
                </Fragment>
            }
            </Fragment>

        );
    }
}
export default FullList;