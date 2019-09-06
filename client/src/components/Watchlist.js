import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { getWatchList } from '../actions/posting.actions'
import { checkLogin} from '../actions/login.actions';





export default props => {

    const watchlist = useSelector(appState => appState.watchlist)
    const userDetails = useSelector(appState => appState.userDetails)
    let userid = userDetails[0].id
    const loginValid = useSelector(appState => appState.authRedirect)
    
    console.log(watchlist)

    useEffect (() => {
        checkLogin()
    
        

    },[])
    useEffect (() => {
        
    getWatchList(userid)
        

    },[loginValid])

    return (
        <div>
        {watchlist.map(item => {
            return (
                <div className="saleItem">
                <div className="itemImage">
                    <img src={item.picture} alt=""/>
                </div>
                <div className="itemDescription">
                    <p>{item.name}</p>
                    <p>${Number(item.price).toFixed(2)}</p>
                    <p>{item.condition}</p>
                </div>
            </div>
            )
        })}
        </div>
    )
}