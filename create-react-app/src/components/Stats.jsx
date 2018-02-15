import React from "react";
import PropTypes from "prop-types";

function Stats(props){
    let total = props.todos.length;
    let countComplited = props.todos.filter(todo => todo.complited).length;
    let notCountComplited = total - countComplited;
    return(
        <div className="stats">
            <p>Всего задач: <span>{total}</span></p>
            <p>Выполненных задач: <span>{countComplited}</span></p>
            <p>Не выполненных задач: <span>{notCountComplited}</span></p>
        </div>    
    );
}

Stats.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Stats;