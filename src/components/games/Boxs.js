import React, { useState } from 'react'
import {boxData} from "../../util/helper/boxData"
import Box from './Box';
import BoxLocalState from './BoxLocalState'

function Boxs() {
  const [squares, setSquares] = useState(boxData)
  const [current, setCurrent] = useState(null)

  const toggel = (id) => {
    setSquares(prev => prev.map(item =>
        item.id === id ? {...item, bool: !item.bool} : item
      )
    )
  }

  return (
    <>
      <h2>Changing props with local state && with id</h2>
      <div className='boxWrapper'>
          {boxData?.map(box => 
              <BoxLocalState box={box}  key={box.id} />
          )}
          <hr />
          {squares?.map(box => 
            <Box 
              bool={box.bool}  
              key={box.id} 
              handleClick={() => toggel(box.id)}
            />
          )}
      </div>

      <hr/>
      {/* map arr and take item ID current version, then check item.id=== current => :)*/}
      <div className='findId'>
        {
          boxData.map(x=>
            <button 
              key={x.id}
              className={x.id === current ? "active" : ""}
              onClick={()=> setCurrent(x.id)}
            >{x.id}</button>
          )
        }
      </div>
    </>
  )
}

export default Boxs