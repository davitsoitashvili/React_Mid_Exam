import React from "react";
import PropTypes from "prop-types";


function Button({type, className, text, onClick}) {
    return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
    )
}

export default Button;

Button.prototypes = 
{
    type : PropTypes.string.isRequired,
    className : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func
}
