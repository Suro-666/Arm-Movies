import React from "react";

const Input = ({ type, onChange, className, name, placeholder, value, }) => {
    return (
        <input
            type={type}
            onChange={onChange}
            className={className}
            name={name}
            placeholder={placeholder}
            value={value}
        />
    )
}

export default Input