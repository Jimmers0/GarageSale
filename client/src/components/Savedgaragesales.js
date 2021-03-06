import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getSavedSales } from '../actions/posting.actions'
import '../styles/savedgaragesales.css'
import {Link} from 'react-router-dom'
import moment from 'moment'
import { checkLogin } from '../actions/login.actions';
import { Button } from 'semantic-ui-react'


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
    },[loginValid,userid])

    return loginValid ?
        <div className="listingcontent">
            <div className="postcontainer">
            {sales.length === 0 ? <div className="error">You have not saved any garage sales. Save garage sales for quick access! </div> : sales.map((sale, i) => (
                <div key={'sale' + i} className="salepost">
                    <h1>{sale.address}</h1>
                    <p>{sale.city}, {sale.state} {sale.zip}</p>
                    <p>Phone: (702) 937-8875</p>
                    <p>Disance: {sale.distance} (About {sale.duration} away from your area)</p>
                    <p>Date and Time: {moment(sale.date).format("dddd MM/DD")} from {sale.from_time} - {sale.to_time}</p>
                    <div id="buttons">
                    <Link to={`/post/${sale.postID}`}>
                    <Button size="small" primary>View More</Button>
                  </Link>
                  </div>
                  </div>
                
            ))}
            </div>



        </div>
    : <div className="fuckOff"><p>Please login to save garagesales for quick access!</p></div>

}