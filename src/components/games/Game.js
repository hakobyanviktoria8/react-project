import React, { useState } from 'react'
import { useParams } from 'react-router';
import WindowWidth from './WindowWidth';
import Count from './Count';
import AddItem from './AddItem';
import Boxs from './Boxs';
import TextEditor from './TextEditor';
import Tenzies from './Tenzies';
import { Posts } from '../posts/Posts';

function Game() {
    const [show, setShow] = useState(true)
    const { params } = useParams();
 
  return (
    <div>
        {!params && <h2>Select your prifer Game</h2>}
        {params === "tenzies" && <Tenzies />}
        {params === "resize" && 
            <>
                <button 
                    className='btnToggle'
                    onClick={()=>setShow(!show)}
                >Toggle</button>
                {show && <WindowWidth />}
            </>
         }  
         {params === "count" && <Count />}               
         {params === "addItem" && <AddItem />}               
         {params === "boxs" && <Boxs />}               
         {params === "textEditor" && <TextEditor />}               
         {params === "posts" && <Posts />}               
    </div>
  )
}

export default Game