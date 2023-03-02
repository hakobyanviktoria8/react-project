import React, { useState } from 'react'
import Layout from '../layout/Layout'
import Input from '../signup/Input'
import "./../../util/styles/Login.css"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isRobot: false,
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: type==="checkbox" ? checked : value,
            }
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <Layout>
        <h2>Login</h2>
        <div className='Login'>
            <form onSubmit={handelSubmit}>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email" 
                    handleChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    handleChange = {handleChange}
                />
                <div className='isRobot'>
                    <Input
                        type="checkbox"
                        name="isRobot"
                        checked={formData.isRobot}
                        handleChange = {handleChange}
                        id="isRobot"
                    /> 
                    <label htmlFor='isRobot'>I'm not a Robot</label>
                </div>
                <input type="submit" value="Login" disabled={!formData.isRobot}/>
            </form>
        </div>
    </Layout>
  )
}

export default Login