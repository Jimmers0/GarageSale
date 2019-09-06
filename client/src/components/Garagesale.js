import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getMySale } from '../actions/landing.actions'
import { checkLogin } from '../actions/login.actions'

export default props => {
    const garageSale = useSelector(appState => appState.mySale)
    const loginValid = useSelector(appState => appState.authRedirect)
    const userDetails = useSelector(appState => appState.userDetails)

    useEffect(() => {
        getMySale(userDetails[0].id)
    }, [userDetails])

    return (
        <div id="myGarageSaleWrapper">
            {loginValid ?
            <div>
                {garageSale.map(item => {
                    return (
                        <p>{item.name}</p>
                    )
                })}
            </div> 
            
            
            
            
            
            
            
            
            
            
            : <div><p>Please login to continue</p> </div>}
        </div>
    )
}