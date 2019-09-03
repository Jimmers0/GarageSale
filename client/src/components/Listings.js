import React, {useEffect, useState} from 'react'
import '../styles/Listings.css'
import { useSelector } from 'react-redux'
import { grabPosts, getCords } from '../actions/landing.actions'
import { saveSale } from '../actions/posting.actions'
import moment from 'moment'
import {Link} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


export default props => {
    const [results, setResults] = useState('')
    const [view, setView] = useState('map')

    const sales = useSelector(appState => appState.listings)
    const coords = useSelector(appState => appState.searchCords)

    useEffect(() => {
        grabPosts(props.match.params.zip)
        getCords(props.match.params.zip)

    }, [props.match.params.zip])

    function checkSales() {
        if (sales.length === 0) {
            setResults('There are no garage sales in your area')
        }
    }

    console.log(coords.lat)


    return (
        <div>
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
              ?    <div className="t">
    
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
                  Save Sale {' '}
                  
                  <Button icon type="submit" size="small" color="black" onClick={e => saveSale(sale)}>
                  <Icon name='crosshairs' />
                  </Button>
  
                 
              
              </div>
              ))} 
              
              </div> 
  
             
  
      </div>
              : "")
          }
        </div>
      );

}