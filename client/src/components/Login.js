import React, {useState, useEffect} from 'react'
import 'normalize.css/normalize.css'
import '../styles/Login.css'
import { login } from '../actions/login.actions'
import { useSelector } from 'react-redux'
import { checkLogin } from '../actions/login.actions'
import { Button, Icon } from 'semantic-ui-react'



export default props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginResponse = useSelector(appState => appState.loginResponse)
  const loginValid = useSelector(appState => appState.authRedirect)

  function sendRegister() {
    props.history.push('/register')
  }
  function signIn() {
    login(username, password)
    setUsername('')
    setPassword('')
    props.history.push('/')
  }

return loginValid ? <div className="fuckOff"><p>You are already logged in!</p></div> :
   <div id="container1">

     <div className="title">
     <h2 className="log">Login</h2>

     </div>
     <div className="loginResponse">
     <p>{loginResponse}</p>
     </div>
     <div className="input">
 <label htmlFor="name"> Username:</label>
  <input className="inputbox"
  type="text"
  id="username"
  name="username"
  value={username}
  onChange={e => setUsername(e.target.value)}
  placeholder="UserName"
  
  />
    </div>
       
       
       <div className="input">
  <label htmlFor="username">Password</label>
  <input className="inputbox"
  type="text"
  id="password"
  name="password"
  value={password}
  onChange={e => setPassword(e.target.value)}
  placeholder="Password"
 
  />
    </div>
       
      
      <div className="submit">
      <button class="ui blue button" onClick={signIn}>Sign In</button>
      <div className="registerline">
       <div>Don't have an account?</div>
       <div color="blue" className="clickreg" onClick={sendRegister}>Register</div>
      </div>
      
      </div>
     
      
    
      
   </div> 


}




