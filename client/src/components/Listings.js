import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import '../styles/Listings.css'
import Navbar from './Navbar'

export default props => {

    let userzip = '89178'

    let sales = [
        {
            name: "garagesale",
            date: "26-08-2019",
            city: "Las Vegas",
            State: "Nevada",
            zip: "89178",
            distance: "10"

        },
        {
            name: "garagesale",
            date: "26-08-2019",
            city: "Las Vegas",
            State: "Nevada",
            zip: "89175",
            distance: "10"

        },
        {
            name: "garagesale",
            date: "26-08-2019",
            city: "Las Vegas",
            State: "Nevada",
            zip: "89174",
            distance: "15"

        },
        {
            name: "garagesale",
            date: "26-08-2019",
            city: "Las Vegas",
            State: "Nevada",
            zip: "89173",
            distance: "2"

        },
        {
            name: "garagesale",
            date: "26-08-2019",
            city: "Las Vegas",
            State: "Nevada",
            zip: "89178",
            distance: "10"

        },
    ]

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
                    {sale.city}, {sale.State}.
                    </div> 
                    <div>
                    {sale.zip === userzip ? "In your area" : `Distance: ${sale.distance}` }
                    </div>


                </div>
            ))}
            </div> 



    </div>
    )

}