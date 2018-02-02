import React, {Component} from "react";
import "./App.css";


var CompImg = function(props){
	return(
		<span>
			<h1>{props.nameComp} <span>Count {props.countState}</span></h1>
			<img src={props.imageUrl} alt={props.altUrl} onClick={props.onCount} />
		</span>
	)
}

class Comp extends Component{
	constructor(props){
		super(props);
		this.state = { count: 1 };
	}

	like(){
		this.setState((props) => ({ count: this.state.count + 1 }));
	}

	render(){
		return(
			<div className="react">
			<CompImg 
				imageUrl={this.props.linkscr} 
				nameComp={this.props.name} 
				countState={this.state.count} 
				altUrl={this.props.desc}
				onCount={this.like.bind(this)}
			 />
				<p>{this.props.desc}</p>
			</div>
		);
	}
}

class App extends Component{
	render(){
		return(
			<div>
				{this.props.objs.map((obj) => {
					return (
						<Comp key={obj.id} name={obj.name} 
							linkscr={obj.img}
							desc={obj.desc} />
					)
				})}
			</div>
		)
	}
}

export default App;