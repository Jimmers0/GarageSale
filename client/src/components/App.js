import React, { useState } from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Landing from './Landing'
import Listings from './Listings'
import Post from './Post'
import Add from './Add'
import Navbar from './Navbar'
import Inventory from './Inventory'
import Garagesale from './Garagesale'
import Settings from './Settings'
import Login from './Login'
import Watchlist from './Watchlist'
import Savedgaragesales from './Savedgaragesales'

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
      
      
     <div className="container">
          <Button className="sidebutton" disabled={visible} onClick={handleShowClick} color="black">
            <Icon name='bars'/>
          </Button>
         
       

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
            
            <Link to="/">
            <Menu.Item onClick={handleSidebarHide}>
              <Icon name='search' />
                Search
            </Menu.Item>
            </Link>

            <Link to="/login">
            <Menu.Item onClick={handleSidebarHide}>
              <Icon name='sign in' />
                Login
            </Menu.Item>
            </Link>

            <Link to="/add">
            <Menu.Item onClick={handleSidebarHide}>
              <Icon name='add' />
              Create Garage Sale
            </Menu.Item>
            </Link>

            <Link to="/myinventory">
            <Menu.Item onClick={handleSidebarHide}>
              <Icon name='clipboard list' />
              Inventory
            </Menu.Item>
            </Link>
            
            <Link to="/mygaragesale">
            <Menu.Item onClick={handleSidebarHide}>
              <Icon name='dollar sign' />
              My Garage Sale
            </Menu.Item>
            </Link>

            <Link to="/savedgaragesales">
            <Menu.Item onClick={handleSidebarHide}>
              <Icon name='crosshairs' />
              Saved Garage Sales
            </Menu.Item>
            </Link>

            <Link to="/watchlist">
            <Menu.Item as='a' onClick={handleSidebarHide}>
              <Icon name='eye' />
              Watchlist
            </Menu.Item>
            </Link>

            <Link to="/settings" onClick={handleSidebarHide}>
            <Menu.Item as='a'>
              <Icon name='setting' />
              Settings
            </Menu.Item>
            </Link>

          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
             <div className="component">
             <Route exact path="/" component={Landing}/>
              <Route path="/search/:zip" component={Listings}/>
              <Route path="/post/:id" component={Post}/>
              <Route path="/add" component={Add}/>
              <Route path="/myinventory" component={Inventory}/>
              <Route path="/mygaragesale" component={Garagesale}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/savedgaragesales" component={Savedgaragesales}/>
              <Route path="/watchlist" component={Watchlist}/>
              <Route path="/login" component={Login}/>

                 
             </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      </Router>
    </Provider>
  )
}