import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getMySale } from '../actions/landing.actions'
import '../styles/post.css'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'


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
    : <div className="fuckOff"><p>Please login to use this feature</p></div>
}