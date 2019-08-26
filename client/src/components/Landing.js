import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import '../styles/landing.css'
import Navbar from './Navbar'

export default props => {
const [zip, setZip] = useState('')

    return (
        <div id="landingWrapper">
            <div id="nav">
                <Navbar/>
            </div>
            <div id="search">
                <Form id="searchForm">
                    <h1>Search your Zip Code for Garage sales in your area!</h1>
                    <input id="zip" type="text" value={zip} onChange={e => setZip(e.target.value)} />
                    <Button type="submit" primary>Search</Button>
                </Form>
            </div>
        </div>
    )
}