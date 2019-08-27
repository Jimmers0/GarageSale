import React from 'react'
import './App.css';
import './index.css';



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

   <div>
     <label htmlFor="name"> Name</label>
       <input value={this.state.Name} name = "Name" id= "Name" type= "text"/>
       
       <label htmlFor="username"> UserName</label>
       <input value= {this.state.username}name = "username" id= "username" type= "text"/>

       <label htmlFor="email"> Email</label>
       <input value= {this.state.Email} name = "EMAIL" id= "Email" type= "text"/>

      
      
       <label htmlFor="Password"> Password</label>
       <input name = "Password" id= "Password" type= "text"/>
       
       <label htmlFor="confirmpassword"> ConfirmPassword</label>
       <input name = "confirmpassword" id= "Cornfirmpassword" type= "text"/>

       <label htmlFor="Website-Please enter a valid url">Website-please enter a valid url</label>
       <input name = "Website-Please enter a valid url" id= "Website-please enter a valid url" type= "text"/>

   </div> 
)



}

}
export default FormApp