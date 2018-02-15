import React, { Component } from "react";
import Button from "./Button";

import PropTypes from "prop-types";

class Form extends Component{
    constructor(props){
        super(props);

        this.state = { title: "" };
        this.handleAdd = this.handleAdd.bind(this);
        this.titleChange = this.titleChange.bind(this);
    }

    handleAdd(event){
        let title = this.state.title;
        event.preventDefault();
        if (title){
            this.props.formAdd(title);
            this.setState({ title: "" });
        }
    }

    titleChange(event){
        let title = event.target.value;
        this.setState({ title });
    }
    
    render(){
        return(
            <form className="form" onSubmit={this.handleAdd}>
                <input type="text" value={this.state.title} onChange={this.titleChange} placeholder="Поставить задачу ?" />
                <Button className="btn add" type="submit">Добавить</Button>
            </form>
        )
    }
}

Form.propTypes = {
    formAdd: PropTypes.func.isRequired,
};

export default Form;