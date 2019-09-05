import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux' 
import { getInventory, markAsSold } from '../actions/inventory.actions'
import { checkLogin } from '../actions/login.actions'
import '../styles/inventory.css'
import InventoryItem from './InventoryItem'

// import {Link} from 'react-router-dom'


export default props=> {
    const [message, setMessage] = useState('')
    const [button, setButton] = useState(false)
    const Inventories = useSelector(appState => appState.inventory)
    const userDetails = useSelector(appState => appState.userDetails)
    const loginValid = useSelector(appState => appState.authRedirect)

    
    useEffect(()=> {
        checkLogin()
    },[Inventories])
    useEffect(() => {
        getInventory(userDetails[0].id)
    }, [loginValid])
    
return (
        <div id="inventoryWrapper">
            <h1>My Inventory</h1>
            <p>{message}</p>
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