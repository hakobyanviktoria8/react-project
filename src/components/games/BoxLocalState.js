import React, { useState } from 'react'

function BoxLocalState({box}) {
    const [boxBool, setBoxBool] = useState(box.bool)
    const handleToggel = () => setBoxBool(!boxBool)

  return (
    <div 
        style={{backgroundColor: boxBool ? "gray" : ""}}
        onClick={handleToggel}
    ></div>
  )
}

export default BoxLocalState