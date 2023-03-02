import React from 'react'

function Box({bool, handleClick}) {
  return (
    <div 
        onClick={handleClick} 
        style={{backgroundColor: bool && "rgb(187 184 184)"}}
    />
  )
}

export default Box