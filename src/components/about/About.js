import React, { useReducer } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

export const About = () => {
  const [checked, setChecked] = useReducer(checked => !checked, false)

  return (
    <Layout>
      <h1>About page</h1>
      <Link to="history">History</Link>
      <h2>Sub title</h2>
      <label htmlFor='check'>Are you agree { checked ? "YES" :"NO"}</label>
      <input
        id="check"
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <br />
      <br />
      <Outlet/>
    </Layout>
  )
}
