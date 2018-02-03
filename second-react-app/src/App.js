import React, { Component } from "react";
import "./App.css";
import Hero from './componets/hero/Hero.js';
import Panel from './componets/panel/Panel.js';

class App extends Component{
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
                                />
                            )
                        })}
                    </div>
                    <div className="right">
                        <Panel allCount='1' />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;