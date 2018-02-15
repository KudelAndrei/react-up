import React, {Component} from "react";
import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";
import PropTypes from 'prop-types';

class Todo extends Component{
    constructor(props){
        super(props);

        this.state = { editing: false };
        this.onEdit = this.onEdit.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onEdit(){
        this.setState({ editing: true });
    }

    onSave(event){
        event.preventDefault();
        let title = this.refs.title.value;
        this.props.handleSave(this.props.id, title);
        this.setState({ editing: false });
    }

    renderTodo(){
        return(
            <div className={`todo-list ${this.props.complited ? 'complited': ''}`}>
                <Checkbox checked={this.props.complited} onChange={() => this.props.handleChange(this.props.id)} />            
                <span className="text" onDoubleClick={this.onEdit}>{this.props.title}</span>
                <Button text="delete" className="btn delete" onClick={() => this.props.onDelete(this.props.id)} />
            </div>
        )
    }

    renderEdit(){
        return(
            <form className="todo-edit" onSubmit={this.onSave}>
                <input type="text" ref="title" defaultValue={this.props.title}/>
                <Button className="btn icon" text="save" type="submit" />
            </form>
        )
    }

    render(){
        return(
            this.state.editing ? this.renderEdit() : this.renderTodo()
        );
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    complited: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired
};

export default Todo;