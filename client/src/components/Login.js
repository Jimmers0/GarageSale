import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/Login.css'



export default props => {

  function sendRegister() {
    props.history.push('/register')
  }

return(

   <div id="container1">

     <div className="title">
     <h2>Login</h2>

     </div>
     
     
     <div className="input">
 <label htmlFor="name"> Email:</label>
  <input className="inputbox"
  type="text"
  id="email"
  name="email"
  // onChange={this.handleChange}
  placeholder="john@doe.com"
  
  />
    </div>
       
       
       <div className="input">
  <label htmlFor="username">Password</label>
  <input className="inputbox"
  type="text"
  id="password"
  name="password"
  // onChange={this.handleChange}
  placeholder="Password"
 
  />
    </div>
       
      
      <div className="submit">
      <button>Sign In</button>
      <button onClick={sendRegister}>Register</button>
      </div>
     
      
    
      
   </div> 
)


}




