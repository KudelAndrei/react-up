import React from "react";
import PropTypes from "prop-types";

function Button(props){
    return(
        <button className={props.className} onClick={props.onClick}>
           <i className="material-icons">{props.text}</i> 
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;