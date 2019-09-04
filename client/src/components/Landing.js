import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import '../styles/landing.css'
import Navbar from './Navbar'
import {useSelector} from 'react-redux'

export default props => {
const [zip, setZip] = useState('')



function searchIt() {
    props.history.push('/search/' + zip)
}

    return (
        <div id="landingWrapper">
            <div id="nav">
            </div>
            <div id="search">
                <Form id="searchForm" onSubmit={searchIt}>
                    <img src="https://i.imgur.com/8tmr7Z3.png" alt="" id="logo"/>
                    <h1>Search your Zip Code for Garage sales in your area!</h1>
                    <input id="zip" type="text" value={zip} onChange={e => setZip(e.target.value)} />
                    <Button type="submit" primary>Search</Button>
  
                </Form>
            </div>
        </div>
    )
}