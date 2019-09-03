import React, { useState } from 'react'
import { register } from '../actions/login.actions'
import '../styles/register.css'
import { Button } from 'semantic-ui-react'


export default props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function sendRegister(e) {
    e.preventDefault()
    register(username, password)
    props.history.push('/login')
  }

    return(
          <form onSubmit={sendRegister} className="registerForm">
            <h1>Register</h1>
            <label htmlFor="username">Username:</label>
            <input className="registerInput" value={username} id="username" type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input className="registerInput" value={password} id="password" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <Button className="submitButton" primary type="submit">Register</Button>
          </form>
    )
}