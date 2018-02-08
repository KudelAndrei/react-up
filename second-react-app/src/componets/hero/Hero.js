import React, { Component } from "react";
import './Hero.css';
import data from "../../data/Heros.json";

class Hero extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = { cheched: false };   
        console.log(props);
    }

    // Cheched(){
    //     this.setState(() => ({cheched: !this.state.cheched }) );
    // }
    
    render(){
        return(
            <div className={this.props.cheched ? 'hero checked' : 'hero'} >
                <div className="hero-img">
                    <img src={this.props.img} alt="" />
                </div>
                <span className="hero-text">
                    <h1 className="hero-head">{this.props.name}</h1>
                    <p className="hero-desc">{this.props.desc}</p>
                    <button className="hero-btn" onClick={this.props.onBnt}>{this.state.cheched ? 'Убрать' : 'Выбрать'}</button>
                </span>
            </div>
                   
        )
    }
}

export default Hero;