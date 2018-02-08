import React, { Component } from "react";
import "./App.css";
import Hero from './componets/hero/Hero.js';
import Panel from './componets/panel/Panel.js';

class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            countActive: 0,
            checked: false };
        this.changeCountActive;
    }

    changeCountActive(props){
        this.setState({ checked: !this.state.checked }); //countActive: ++this.state.countActive,
        console.log(this.state.checked);
    }

    render(){
        return(
            <div className="wrap" >
                <h1 className="title">It's tour Hero for React </h1>
                <div className="container">
                    <div className="left">
                        {this.props.heros.map( hero => {
                            return(
                                <Hero
                                    key={hero.id}
                                    name={hero.name}
                                    img={hero.img}
                                    desc={hero.desc}
                                    onBnt={this.changeCountActive.bind(this)}
                                />
                            )
                        })}
                    </div>
                    <div className="right">
                        <Panel countHeros={this.state.countActive} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;