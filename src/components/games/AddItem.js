import React, { useState } from 'react'
import EveryItem from './EveryItem';

function AddItem() {
    const [arr, setArr]= useState(["Item 0", "Item 1"]);

    const handleClick = () => {
        setArr([...arr, `Item ${arr.length}`])
    } 

    const handleDelete = (id) => {
        return setArr(prev => prev.filter((x, idx) => idx !== id))
    }

  return (
    <div className='addItem'>
        <button onClick={handleClick}>Add item</button>
        {arr && arr.map((every, idx)=>
            <EveryItem 
                key={idx} 
                handleDelete={() => handleDelete(idx)}
                every={every}
                idx={idx}
            />
        )}
    </div>
  )
}

export default AddItem