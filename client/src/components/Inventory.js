import React, {useEffect} from 'react'
import { useSelector } from 'react-redux' 
import { getInventory } from '../actions/inventory.actions'
import { checkLogin } from '../actions/login.actions'

// import {Link} from 'react-router-dom'


export default props=> {
    const getInventories = useSelector(appState => appState.inventory)
    const getuserDetails = useSelector(appState => appState.userDetails)
    
    useEffect(()=> {
        checkLogin()
    },[])

    console.log(getuserDetails)
    
return (
        
<div className="Inventories">
        {/* {getInventories.getuserDetails.map(inv => {
            return(
       <span>{inv.id}</span>
      
       ) */}
            })}
       
       </div>
            



            
    )
}


// export default props => {
//     const inventory = useSelector(appState =>  appState.inventory)
        
//     useEffect(()=>{
//             getInventory(props.match.params.slug)
           
        
//         }, [])
            
            
//     // pull inventory from redux
//     // map each inventory into a div container
//     return (

//      <div id="Inventory">
//      <span>Inventory</span>
//     {inventory.map( inventory =>(
//      <Link to = {"/"+ inventory.slug}>{inventory.name}</ Link>
//     ))
     
//     }
    

//     </div>
    
    
//     )
// }