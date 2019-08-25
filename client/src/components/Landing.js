import React, {useState} from 'react'
import {Form, Button, Menu} from 'semantic-ui-react'
import '../styles/landing.css'

export default props => {
const [zip, setZip] = useState('')

    return (
        <div id="landingWrapper">
            <div id="nav">
            <Menu inverted>
        <Menu.Item
          name='home'
          active={true}
        />
        <Menu.Item
          name='about'
        />
        <Menu.Item
          name='FAQ'
        />
      </Menu>
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