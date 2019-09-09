import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getMySale } from '../actions/landing.actions'
import '../styles/post.css'
import moment from 'moment'
import {Link} from 'react-router-dom'


export default props => {
    const garageSale = useSelector(appState => appState.mySale)
    const userDetails = useSelector(appState => appState.userDetails)
    const loginValid = useSelector(appState => appState.authRedirect)

    useEffect(() => {
        getMySale(userDetails[0].id)
    }, [userDetails])

    return loginValid ? 
        <div className="listingcontent">
            <div className="postcontainer">
            {garageSale.length === 0 ? <div className="error">You do not have any garage sales. Youre created garage sales will appear here! </div> : garageSale.map((sale, i) => (
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
    : <div className="fuckOff"><p>Please login to use this feature</p></div>
}