import React, { useContext, useState } from 'react'
import { DataContext } from '../../App';
import "./../../util/styles/Search.css"

function Search() {
    const [searchValue, setSearchValue]= useState("");
    const [data, setData] = useContext(DataContext)

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClick = () => {
        fetch(`https://api.github.com/users/${searchValue}`)
          .then((response) => response.json())
          .then((data) => setData([data]))
          .catch(err => console.log(err))
    }

  return (
    <div className='searchWrapper'>
        <input 
            type="search" 
            placeholder='Search items...' 
            value={searchValue}
            onChange={handleChange}
            />
        <button             
            className={searchValue && "active"}
            disabled={!searchValue}
            onClick={handleClick}
        >
            Search
        </button>  
    </div>
  )
}

export default Search