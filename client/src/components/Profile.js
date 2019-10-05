import React, { useEffect } from 'react'
import { grabProfileDetails } from '../actions/profile.actions'
import { useSelector } from 'react-redux'
import '../styles/profile.css'
import { Icon } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default props => {
    const profileDetails = useSelector(appState => appState.profile)

    useEffect(() => {
        grabProfileDetails(props.match.params.id)
    }, [props.match.params.id])
    console.log(profileDetails)

    return profileDetails.length > 0 ?
        <div id="profileWrapper">
                    <div id="profileHeader">
                    <div id="profileLeft">
                        <div id="profileImage">
                        <img src={profileDetails[0].picture} alt=""/>
                        </div>
                        <div id="profileDetails">
                    <h1>{profileDetails[0].first_name} {profileDetails[0].last_name}</h1>
                    <p>{profileDetails[0].city}, {profileDetails[0].state}</p>
                    <p><Icon name="thumbs up outline" color="green"/>: 12 <Icon name="thumbs down outline" color="red"/>: 2</p>
                    </div>
                    </div>
                    </div>
                    <div id="previousSales">
                        <h1>Previous Garage Sales</h1>
                        <div id="individualSale">
                            {profileDetails.map((sale, i) => {
                                return (
                                    <div key={'sale' + i} className="salepost">
                                    <h1>{sale.address}</h1>
                                    <p>{sale.city}, {sale.state} {sale.zip}</p>
                                    <p>Phone: (702) 937-8875</p>
                                    <p>Disance: {sale.distance} (About {sale.duration} away from your area)</p>
                                    <p>Date and Time: {moment(sale.date).format("dddd MM/DD")} from 10:00AM to 6:00PM</p>
                                    <div id="buttons">
                                    <Link to={`/post/${sale.postID}`}>
                                    <Button size="small" primary>View More</Button>
                                  </Link>
                                  </div>
                                  </div>
                                )
                            })}
                        </div>
                    </div>
        </div> : <p>Loading</p>
}