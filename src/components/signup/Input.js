import React from 'react'

function Input({
    type, 
    placeholder="",
    handleChange, 
    name, 
    value,
    checked=false,
    id="", 
}) {
  return (
    <input 
        type={type} 
        placeholder={placeholder} 
        onChange={handleChange}
        name={name}
        value={value}
        checked={checked}
        id={id}
    />
  )
}

export default Input