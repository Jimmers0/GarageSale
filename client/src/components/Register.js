import React from 'react'


export default props => {

    return(
        <div id="container1">

        <div className="title">
        <h2>Create Account</h2>
   
        </div>
        
        
        <div className="input">
    <label htmlFor="name"> Name</label>
     <input className="inputbox"
     type="text"
     id="email"
     name="email"
    //  onChange={this.handleChange}
     placeholder="Jacob"
     
     />
       </div>
          
          
          <div className="input">
     <label htmlFor="username">Username</label>
     <input className="inputbox"
     type="text"
     id="username"
     name="username"
    //  onChange={this.handleChange}
     placeholder="jacob_jkl"
    
     />
       </div>
   
     <div className="input">
   <label htmlFor="email">Email</label>
     <input className="inputbox"
     type="text"
     id="email"
     name="email"
    //  onChange={this.handleChange}
     placeholder="jacob@gmail.com"
    
     />
     </div>
          
   
          <div className="input">
     <label htmlFor="Password"> Password</label>
     <input className="inputbox" 
     type="text"
     id="password"
     name="password"
    //  onChange={this.handleChange}
     
   
     />
     </div>
   
          <div className="input"> 
     <label htmlFor="confirmpassword"> Confirm Password</label>
     <input className="inputbox"
     type="text"
     id="confirmpassword"
     name="confirmpassword"
    //  onChange={this.handleChange}
     
     
     />
   
     </div>
          
         
         <div className="submit">
         <button>Register</button>
   
         </div>
        
         
       
         
      </div> 
    )
}