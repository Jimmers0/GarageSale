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
    const [view, setView] = useState('map')

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
                {sales.map(item => {
                    return (
                        <Marker
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
                  <Link to={`/post/${sale.postID}`}>

                      <div className="name">
                        <div className="salename">
                        {sale.name}
                        </div>
                        <div className="spacer"/></div>

                        


                      {/* <div className="address">Address: {sale.address}, {sale.city}, {sale.state}.</div> */}

                      <div className="DD">
                      <p className="distance">{sale.zip === props.match.params.zip ? "In your area" : `Distance: ${sale.distance}` }</p>
                      <p className="date">{moment(sale.date).format("dddd MM/DD")}</p>
                      </div>

                      </Link>

                      {userDetails.length > 0 ?  <div>Save Sale {' '}
                  
                  <Button icon type="submit" size="small" color="red" onClick={e => saveSale(userDetails[0].id, sale.postID)}>
                  <Icon name='black crosshairs' />
                  </Button></div> : ""}
  
                  </div>
                  
                  
  
                 
              
           
              ))} 
  
             
  
      </div>
              : "")
          }
        </div>
      );

}