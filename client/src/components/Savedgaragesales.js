import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getSavedSales } from '../actions/posting.actions'
import '../styles/savedgaragesales.css'
import {Link} from 'react-router-dom'
import moment from 'moment'
import { checkLogin, authRedirect } from '../actions/login.actions';



export default props => {

    const sales = useSelector(appState => appState.savedsales)
    const userDetails = useSelector(appState => appState.userDetails)
    const loginValid = useSelector(appState => appState.authRedirect)

    let userid = userDetails[0].id
    console.log("hey", userid)
    

    useEffect (() => {
        checkLogin()
    
        

    },[])
    useEffect (() => {
        
    getSavedSales(userid)
        

    },[loginValid])





    return (
        <div id="listingcontent">
            <div salespostcontainer="salepostcontainer">
            {sales.length === 0 ? <div className="error">You have no saved garage sales. Save garage sales for quick access! </div> : sales.map((sale, i) => (
                <Link to={`/post/${sale.postID}`}>
                <div key={'sale' + i} className="salepost">
                    <div className="nameanddate">
                    <strong>{sale.name}</strong> {moment(sale.date).format("dddd MM/DD")} 
                    </div>
                    <div>
                    <p>City: {sale.city} State: {sale.state}</p>
                    </div> 
                    <div>
                    <p>{sale.zip === props.match.params.zip ? "In your area" : `Distance: ${sale.distance}` }</p>
                    <p>Address: {sale.address}</p>
                    </div>


                </div>
                </Link>
                
            ))}
            </div>



        </div>
    )

}