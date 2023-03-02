import React from 'react'
import "./Button.css"

export const Button = ({disabled=false, onClick, children}) => {
  return (
    <button 
      disabled={disabled}
      className='button'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
