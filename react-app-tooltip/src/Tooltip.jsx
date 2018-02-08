import React, {Component} from 'react';

class Tooltip extends Component{
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { opacity: false }; 
	}

	toggle(){
		this.setState({ opacity: !this.state.opacity });
		console.log(this.state.opacity);
	}

	render(){

		const style = {
			opacity: (this.state.opacity) ? 1 : 0,
			display: (this.state.opacity) ? "block" : "none"
		}

		return(
			<strong className="tooltip">
				<span className="tooltip-hide" style={style}>this is {this.props.text}</span>
				<span onMouseEnter={this.toggle} onMouseOut={this.toggle}>This is {this.props.children}</span>
			</strong>
		)
	}
}

export default Tooltip;