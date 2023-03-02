import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import "./../../util/styles/Signup.css"
import Input from './Input'

function Signup() {
  const [data, setData] = useState({
    fullName:"",
    email:"",
    isAgree: false,
    gender: "",
    country:"",
  })
  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    setData(prev => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Layout>
        <h2>Signup</h2>
        <div className='Signup'>
          <form onSubmit={handleSubmit}>
            <Input 
              type="text"
              placeholder="Full name" 
              handleChange={handleChange}
              name="fullName"
              value={data.fullName}
            />
            <Input 
              type="email"
              placeholder="Email" 
              handleChange={handleChange}
              name="email"
              value={data.email}
            />
            <div className='gender'>
              <Input 
                type="radio" 
                name="gender" 
                id="female" 
                value="female"
                handleChange={handleChange}
                checked={data.gender === "female"}
              /> 
              <label htmlFor='female'>Female</label>
              <Input 
                type="radio" 
                name="gender" 
                id="male" 
                value="male"
                handleChange={handleChange}
                checked={data.gender === "male"}
              /> 
              <label htmlFor='male'>Male</label>
            </div>
            <div className='country'>
              <label>Select your country</label><br/>
              <select 
                value={data.country}
                onChange={handleChange}
                name='country'
              >
                <option value="arm">Arm</option>
                <option value="ru">Ru</option>
                <option value="us">US</option>
              </select>
            </div>
            <div>
              <Input 
                type="checkbox" 
                handleChange={handleChange}
                checked={data.isAgree}
                name="isAgree"
                id="agree"
              />
              <label htmlFor='agree'>Are you agree</label>
            </div>
            <input 
              type="submit" 
              disabled={!data.isAgree || !data.email}
              className="formBtn"
              value="Sign up"
            />
          </form>
          <p>Already have account <Link to="/login">Ligin</Link></p>
        </div>
    </Layout>
  )
}

export default Signup