import React, { useState } from 'react'

function EveryItem({handleDelete, idx, every}) {
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check);
    }
   
  return (
    <div style={{background: idx % 2 === 0 ? "gray" : "#f2f2f2"}}> 
        <input 
            type="checkbox" 
            checked={check}
            onChange={handleCheck}
        />
        <span 
            style={{textDecoration: check && "line-through"}}
        >{every}</span>
        <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default EveryItem