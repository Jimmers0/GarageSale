import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'


class FormApp extends React.Component{
constructor (args){
super (args)
this.state= {
 Name: '',
 username: '',
 email: '',



}

}
    
render(){
return(

   <div id="container1">
     <h2>Create Account</h2>
     
 <label htmlFor="name"> Name</label>
  <input
  type="text"
  id="email"
  name="email"
  onChange={this.handleChange}
  placeholder="Jacob"
  className=""
  />
       
       
       
  <label htmlFor="username">Username</label>
  <input
  type="text"
  id="username"
  name="username"
  onChange={this.handleChange}
  placeholder="jacob_jkl"
 
  />

<label htmlFor="email">Email</label>
  <input
  type="text"
  id="email"
  name="email"
  onChange={this.handleChange}
  placeholder="jacob@gmail.com"
 
  />
       
  <label htmlFor="Password"> Password</label>
  <input
  type="text"
  id="password"
  name="password"
  onChange={this.handleChange}
  placeholder="******"

  />
       
  <label htmlFor="confirmpassword"> Confirm Password</label>
  <input
  type="text"
  id="confirmpassword"
  name="confirmpassword"
  onChange={this.handleChange}
  placeholder="******"
  
  />
       
      <div id="Submit">
      <form onSubmit={this.handleSubmit}>
      <input id="submitButton" type="submit" value="Submit" />
      </form>
      </div>
      
   </div> 
)


}

}
export default FormApp


