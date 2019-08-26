import React, {useState, useEffect} from 'react'
import {Form, Button} from 'semantic-ui-react'
import '../styles/Listings.css'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { grabPosts } from '../actions/landing.actions'

export default props => {

    const sales = useSelector(appState => appState.listings)

    useEffect(() => {
        grabPosts(props.match.params.zip)

    }, [props.match.params.zip])
 
    console.log(sales)


return (
    <div>
        <Navbar/>
            <div className="salepostcontainer">
            {sales.map((sale, i) => (
                <div key={'sale' + i} className="salepost">
                    <div className="nameanddate">
                    <strong>{sale.name}</strong> {sale.date} 
                    </div>
                    <div>
                    {sale.city}, {sale.state}.
                    </div> 
                    <div>
                    {sale.zip === props.match.params.zip ? "In your area" : `Distance: ${sale.distance}` }
                    </div>


                </div>
            ))}
            </div> 



    </div>
    )

}