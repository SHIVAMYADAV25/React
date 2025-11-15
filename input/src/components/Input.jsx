import React, { useState } from 'react'

const Input = (props) => {
    const {
        label,
        onChange,
        error = "",
        size = "medium",
        fullWidth = false,
    } = props

    const [value , setValue ] = useState("");

    function handleChange(e){
        const newValue = e.target.value ;
        setValue(newValue);

        if(typeof onChange === "function"){
            onChange(value);
        }
    }

    const baseStyle= {
        padding: "8px 12px",
        border : "1px solid #ccc",
        borderRadius:6,
        fontSize: 16,
    }

    const sizeStyles = {
        small : {padding : "6px 10px" , fontSize:14},
        medium : {padding : "8px 12px" , fontSize:16}
    };

    const errorStyle = error ? {borderColor:"red" ,color:"red"} : {};
    const widthStyle = fullWidth ? {width : "100%"} : {};

    const inputStyle = {
        ...baseStyle,
        ...(sizeStyles[size] || sizeStyles.medium),
        ...errorStyle,
        ...widthStyle
    }

  return (
    <div style={{marginBottom:14}}>
        {label && (
            <label style={{display:"block" , marginBottom:6}}>
                {label}
            </label>
        )}

        <input
        value={value}
        onChange={handleChange}
        style={inputStyle}
        />

        {error && (
            <div style={{color:"red" , fontSize:13 , marginTop:4}}>
                {error}    
            </div>
        )}

    </div>
  )
}

export default Input