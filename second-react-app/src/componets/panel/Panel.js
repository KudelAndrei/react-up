import React, { Component } from "react";
import './Panel.css';

class Panel extends Component{
    constructor(props, context) {
        super(props, context);
        
        this.state = { count: this.ChangeCount.bind(this) };
    }

    ChangeCount(){
       this.setState((props) => ({ count: this.props.allCount }));
       console.log(this.state);
    }
    
    render(){
        return(
            <div className="panel" onClick={this.ChangeCount} >
                <span>Количество выбраных карточек: { this.props.allCount }</span>
            </div>
        )
    }
}

export default Panel;