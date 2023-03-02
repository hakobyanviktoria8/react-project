import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { limitOptions } from '../../util/constant/postsLimit'
import { sortOptions } from '../../util/constant/postsSort'
import { useFetching } from '../../util/hooks/useFetching'
import Layout from '../layout/Layout'
import { Button } from '../UI/button/Button'
import styles from "./../../util/styles/Posts.module.css"
import { Pagination } from './Pagination'
import { PostForm } from './PostForm'
import { PostsList } from './PostsList'
import { SelectPosts } from './SelectPosts'

export const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [sortVal, setSortVal] = useState("")
  const [searchVal, setSearchVal] = useState("")

  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const totalCount = 100

  const [fetchPosts, loading, postError] = useFetching(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`)
    if(response.status === 200) {
      const data = await response.json();
      setPosts(data)
      setTotalPage(Math.ceil(totalCount/limit))
    } else {
      setPosts(null)
    }
  })

  useEffect(()=> {
    fetchPosts()
  } ,[limit, currentPage])
    
  const addPosts = (newPostItem) => {
    setPosts([...posts, newPostItem])
  }

  const handleDelPost = (id) => {
    setPosts(posts?.filter(p => p?.id !== id))
  }

  const handleSortPost = (sort) => {
    setSortVal(sort);
    setPosts([...posts].sort((a, b) => a[sortVal]?.localeCompare(b[sortVal])))
  }
  
  const handleLimitPost = (limit) => {
    setLimit(limit)
    fetchPosts()
  }

  const [handleSearchPost] = useFetching(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchVal}`)
    if(response.status === 200) {
      const data = await response.json();
      setPosts([data])
    } else {
      setPosts(null)
    }
  })
  
  const handleChangeSearchId = (e) => {
    if(isNaN(e.target.value)) {
      return false
    } else {
      setSearchVal(e.target.value)
    }
  }

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <Layout>
      <div className={styles.formWrapper}>
        <PostForm addPosts={addPosts}/>

        <div className={styles.formSearch}>
          <input 
            placeholder='Search post with id...'
            value={searchVal} 
            onChange={handleChangeSearchId}
            pattern="[0-9.]+"
            type="text"
          />
          <Button disabled={!searchVal} onClick={handleSearchPost}>Search</Button>
        </div>

        <div>
          <SelectPosts 
            val={sortVal} 
            onChange = {handleSortPost}
            optins={sortOptions}
          />
          <SelectPosts 
            val={limit} 
            onChange={handleLimitPost}
            optins={limitOptions}
          />
        </div>
      </div>
      {
        loading ? 
          <h2>Loading...</h2>
          :
          <PostsList 
            posts={posts} 
            handleDelPost={handleDelPost} 
          />   
      }

      <Pagination 
        totalPage={totalPage} 
        currentPage={currentPage} 
        handleChangePage={handleChangePage}
      /> 
    </Layout>
  )
}
