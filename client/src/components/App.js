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
     <p>Create Account</p>
     <label htmlFor="name"> Name</label>
       <input value={this.state.Name} name = "Name" id= "Name" type= "text"/>
       
       <label htmlFor="username"> UserName</label>
       <input value= {this.state.username}name = "username" id= "username" type= "text"/>

       <label htmlFor="email"> Email</label>
       <input value= {this.state.Email} name = "EMAIL" id= "Email" type= "text"/>
       
       <label htmlFor="Password"> Password</label>
       <input name = "Password" id= "Password" type= "text"/>
       
       <label htmlFor="confirmpassword"> Confirm Password</label>
       <input name = "confirmpassword" id= "Cornfirmpassword" type= "text"/>
       
       <form onSubmit={this.handleSubmit}>
        
        {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        
        <input type="submit" value="Submit" />
        
      </form>
      
   </div> 
)


}

}
export default FormApp


{/* /* <label htmlFor="submit">Submit</label>
        <input value={this.state.Submit} name = "Submit" id="Submit"type= "text"/>
       */ }