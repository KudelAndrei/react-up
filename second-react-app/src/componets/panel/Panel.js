import React, { Component } from "react";
import './Panel.css';

class Panel extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    
    render(){
        return(
            <div className="panel">
                <span>Количество выбраных карточек: { this.props.countHeros.length }</span>
            </div>
        )
    }
}

export default Panel;