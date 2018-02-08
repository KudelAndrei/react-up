import React, {Component} from "react";
import Alert from "./Alert.js";
import "./Form.css";


class Form extends Component{
	constructor(props){
		super(props);
		this.state = { 
			disabled: "disabled",
			name: "",
			focus: false,
			submit: false,
		};
		this.inputValid = this.inputValid.bind(this);
		this.inputFocus = this.inputFocus.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	inputValid(event){
		event.target.value.length > 3 ?	this.setState({ disabled: "" }) : this.setState({ disabled: "disabled" });
		this.setState({ name: event.target.value });
	}

	inputFocus(event){
		this.setState({ focus: !this.state.focus });
		this.state.name ? this.setState({ focus: true }) : this.setState({ focus: false });
	}

	formSubmit(event){
		event.preventDefault();
		this.setState({ submit: !this.state.submit });
		setTimeout(() => {
			this.setState({ submit: !this.state.submit, name: "", focus: false, disabled: !this.state.disabled });
		}, 2000);
	}

	render(){
		const focusClass = this.state.focus ? "active" : "";
		const alert = this.state.submit && <Alert text={this.state.name} />;
		return(
			<form className="form z-depth-3" onSubmit={this.formSubmit}>
				{alert}
				<h3>Hello, Its's Form Subscribe</h3>
				<div className="input-field col s6">
          <input id="first_name" type="text" className="validate" value={this.state.name} onChange={this.inputValid} onFocus={this.inputFocus} onBlur={this.inputFocus} />
          <label htmlFor="first_name" className={focusClass} >First Name</label>
        </div>
				<button className="btn waves-effect waves-light btn-large" type="submit" name="action" disabled={this.state.disabled} >Submit
				  <i className="material-icons right">send</i>
				</button>
			</form>
		)
	}
}

export default Form;