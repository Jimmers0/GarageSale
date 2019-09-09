import React, { useState } from 'react'
import { register } from '../actions/login.actions'
import '../styles/register.css'
import { Button } from 'semantic-ui-react'


export default props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  function sendRegister(e) {
    e.preventDefault()
    register(username, password, fname, lname, city, state)
    props.history.push('/login')
  }

    return(
		<div className="regcontainer">
          <form onSubmit={sendRegister} className="registerForm">
            <h2 className="reglogo">Register</h2>
            <input className="registerInput" value={username} id="username" type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
            <input className="registerInput" value={password} id="password" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <input className="registerInput" type="text" placeholder="First Name" onChange={e => setFname(e.target.value)}/>
            <input className="registerInput" type="text" placeholder="Last Name" onChange={e => setLname(e.target.value)}/>
            <input className="registerInput" type="text" placeholder="City" onChange={e => setCity(e.target.value)}/>
            <select onChange={e => setState(e.target.value)}>
              <option value="default">Select your State</option>
            <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
            </select>
            <Button className="submitButton" primary type="submit">Register</Button>
          </form>
		  </div>
    )
}