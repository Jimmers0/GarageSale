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
        checkLogin()
    }, [props.match.params.zip])

    

   


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
                  <div>
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
                  {userDetails.length > 0 ?  <div>Save Sale {' '}
                  
                  <Button icon type="submit" size="small" color="black" onClick={e => saveSale(userDetails[0].id, sale.postID)}>
                  <Icon name='crosshairs' />t n
                  </Button></div> : ""}
  
                 
              
              </div>
              ))} 
  
             
  
      </div>
              : "")
          }
        </div>
      );

}