import React, { useState } from 'react'

function TextEditor() {
    const [text, setText] = useState("")
    const[styleText, setStyleText] = useState("")
  return (
    <div className='TextEditor'>
        <button onClick={() => setStyleText("bold")}><b>B</b></button>
        <button onClick={() => setStyleText("italic")}><i>I</i></button>
        <button onClick={() => {setText(prev => prev.toUpperCase())}}>AA</button>
    
        <div>
            <textarea 
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
        </div>
        <p className={styleText}>{text}</p>
    </div>
  )
}

export default TextEditor