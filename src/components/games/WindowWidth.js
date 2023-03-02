import React, { useEffect, useState } from 'react'

function WindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resizeFunc = () => setWidth(window.innerWidth);
        window.addEventListener("resize", resizeFunc);    
        return () => window.removeEventListener("resize", resizeFunc);
    }, [])
    
  return (
    <div className='WindowWidth'>
        <h2>Window Width: {width}</h2>
        <br/>
    </div>
  )
}

export default WindowWidth