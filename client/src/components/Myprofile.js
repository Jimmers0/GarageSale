import React from 'react'
import {useSelector} from 'react-redux'

export default props => {
    const loginValid = useSelector(appState => appState.authRedirect)
    const userDetails = useSelector(appState => appState.userDetails)

    return (
        <div id="myProfileWrapper">
            {loginValid ? 
            
            <div id="profileInfo">
            {userDetails.map(item => {
                return (
                    <p>{item.username}</p>
                )
            })}
            </div>
            
            
            
            
            
            
            : <p>Logged Out</p>}
        </div>
    )
}