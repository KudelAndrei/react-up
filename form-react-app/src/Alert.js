import React, {Component} from "react";

class Alert extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="toast rounded alert">Thank you {this.props.text} for Registratoin!!!</div>
		)
	}
}

export default Alert;