import { useState } from 'react'

export const useInput = (initialVal) => {
    const [val, setVal] = useState(initialVal)
    return [
        {
            val,
            onChange: e => setVal(e.target.value)
        },
        () => setVal(initialVal)
    ]
}