import React from "react";
import { Link } from "react-router-dom";

const Button = ({link, text}) => {
    return (<Link to={link } className="py-2 px-8 bg-blue-500 text-white font-semibold rounded">
    <span className='font-bold'>{text}</span>
</Link>);
}

export default Button;