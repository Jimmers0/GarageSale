import React, {useEffect, useState} from 'react'
import '../styles/Listings.css'
import { useSelector } from 'react-redux'
import { grabPosts, getCords } from '../actions/landing.actions'
import { saveSale } from '../actions/posting.actions'
import { checkLogin } from '../actions/login.actions'
import moment from 'moment'
import {Link} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


export default props => {
    const [view, setView] = useState('list')

    const sales = useSelector(appState => appState.listings)
    const coords = useSelector(appState => appState.searchCords)
    const userDetails = useSelector(appState => appState.userDetails)

    useEffect(() => {
        grabPosts(props.match.params.zip)
        getCords(props.match.params.zip)
    }, [props.match.params.zip])

    

   console.log("hi" ,sales)


    return (
        <div id="listingContent">
            <div id="viewOptions">
                <button onClick={e => setView('map')}>Map View</button>
                <button onClick={e => setView('list')}>List View</button>
            </div>
          { view === "map"
            ?    <div id="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyC8cLGX-N6A6ramMmRMgKK07-TR-rlh5sA"}}
              center={coords}
              defaultZoom={14}
            >
                {sales.map((item,i) => {
                    return (
                        <Marker key={i}
                        lat={item.lat}
                        lng={item.lng}
                        text="GS"
                        item={item}
                      />
                    )
                })}
            </GoogleMapReact>
          </div>
            : ( view === "list"
              ? 
    
              <div className="salepostcontainer">
              {sales.map((sale, i) => (
                  <div key={'sale' + i} className="salepost">
                    <h1>{sale.address}</h1>
                    <p>{sale.city}, {sale.state} {sale.zip}</p>
                    <p>Phone: (702) 937-8875</p>
                    {/* <p>Disance: {sale.distance} (About {sale.duration} away from your area)</p> */}
                    <p>Date and Time: {moment(sale.date).format("dddd MM/DD")} from {sale.from_time} - {sale.to_time}</p>
                    <div id="buttons">
                    <Link to={`/post/${sale.postID}`}>
                    <Button size="small" primary>View More</Button>
                  </Link>
                  {userDetails.length > 0 ?
                  <div id="saveButton">
                  <Button size="small" color="red" onClick={e => saveSale(userDetails[0].id, sale.postID)}>
                  Save Sale
                  </Button></div> : ""}
                    </div>
  
                  </div>
                  
                  
  
                 
              
           
              ))} 
  
             
  
      </div>
              : "")
          }
        </div>
      );

}