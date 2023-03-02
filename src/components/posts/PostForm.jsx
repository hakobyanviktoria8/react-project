import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import styles from "./../../util/styles/Posts.module.css"
import { Button } from '../UI/button/Button'

export const PostForm = ({addPosts}) => {
    const [postVal, setPostVal] = useState({title: "", body: ""})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPostVal(
            {
              ...postVal,
              [name]: value,
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            ...postVal,
            id: nanoid()
        }
        addPosts(newPost)
        setPostVal({title: "", body: "",})
    }

  return (
    <form onSubmit={handleSubmit} className={styles.postsForm}>
        <input 
            value={postVal.title} 
            name="title" 
            onChange={handleChange} 
            placeholder="Write some title..."
        />
        <input 
            value={postVal.body} 
            name="body" 
            onChange={handleChange} 
            placeholder="Write some body..."
        />
        <Button>Add post</Button>
    </form>
  )
}
