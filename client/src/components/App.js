import React, { useState } from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './Landing'
import Listings from './Listings'
import Post from './Post'
import Add from './Add'
import Navbar from './Navbar'
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'


export default props => {

  const [activeNav, setActiveNav] = useState('')
    const [visible, SetVisible] = useState(false)

  function handleShowClick() {
    SetVisible(true)
  }

  function handleSidebarHide() {
    SetVisible(false)
  }

  return (
    <Provider store={store}>
      <Router>
      <Navbar/>
      <div>
      <Button.Group className="sidebarbutton">
          <Button disabled={visible} onClick={handleShowClick}>
            <Icon name='bars'/>
          </Button>
         
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            direction='right'
            animation='overlay'
            icon='labeled'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='sign in' />
                Login
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='add' />
              Create Garage Sale
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='clipboard list' />
              Inventory
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='dollar sign' />
              My Garage Sale
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='crosshairs' />
              Saved Garage Sales
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='eye' />
              Watchlist
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='setting' />
              Settings
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
             <div className="component">
             <Route exact path="/" component={Landing}/>
              <Route path="/search/:zip" component={Listings}/>
              <Route path="/post/:id" component={Post}/>
              <Route path="/add" component={Add}/>
                 
             </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      </Router>
    </Provider>
  )
}