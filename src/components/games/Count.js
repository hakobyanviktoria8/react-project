import React, { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(prev => prev + 1)
    }

    const subCount = () => {
        setCount(prev => prev - 1)
    }
  return (
    <div className='countWrapper'>
      <button onClick={subCount}>-</button>
      <div className='count'>{count}</div>
      <button onClick={addCount}>+</button>
    </div>
  )
}

export default Count