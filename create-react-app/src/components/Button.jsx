import React from "react";
import PropTypes from "prop-types";

function Button(props){
    return(
        <button className={props.className} {...props}>
        {
            props.text ?
            <i className="material-icons">{props.text}</i> :
            props.children
        }
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;