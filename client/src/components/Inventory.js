import React, {useEffect} from 'react'
import { useSelector } from 'react-redux' 
import { getInventory } from '../actions/inventory.actions'
import { checkLogin } from '../actions/login.actions'
import '../styles/inventory.css'
import InventoryItem from './InventoryItem'

// import {Link} from 'react-router-dom'


export default props=> {
    const Inventories = useSelector(appState => appState.inventory)
    const userDetails = useSelector(appState => appState.userDetails)
    const loginValid = useSelector(appState => appState.authRedirect)

    useEffect(() => {
        getInventory(userDetails[0].id)
    }, [userDetails])
    
return (
        <div id="inventoryWrapper">
            <h1>My Inventory</h1>
            {loginValid ? 
            
            
            <div id="inventoryItems">
                {Inventories.map(item => {
                    return (
                        <InventoryItem item={item}/>
                    )
                })}
            </div>
            
            
            
            
            
            
            
            : <p>Please login to view this page</p>}
        </div>
)
}