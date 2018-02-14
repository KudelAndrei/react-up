import React from "react";
import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";
import PropTypes from 'prop-types';

function Todo(props){
    return(
        <div className={`todo-list ${props.complited ? 'complited': ''}`}>

            <Checkbox checked={props.complited} onChange={() => props.handleChange(props.id)} />            
            <span className="text">{props.title}</span>
            <Button text="delete" className="btn" onClick={() => props.onDelete(props.id)} />

        </div>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    complited: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Todo;