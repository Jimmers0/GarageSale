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
import Inventory from './Inventory'
import Garagesale from './Garagesale'
import Myprofile from './Myprofile'
import Login from './Login'
import Watchlist from './Watchlist'
import Savedgaragesales from './Savedgaragesales'
import Register from './Register'
import ItemSearch from './ItemSearch.js'
import DrawerToggleButton from './drawerToggleButton'
import SideDrawer from './sideDrawer'


export default props => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)


  function drawerToggleClickHandler() {
    sideDrawerOpen === false ? setSideDrawerOpen(true) : setSideDrawerOpen(false) 
  }

  function drawerToggleClickHandler2() {
    sideDrawerOpen === true ? setSideDrawerOpen(false) : console.log('closed')
  }

  return (
    <Provider store={store}>
      <Router>
      <div className="container" style={{ height: '100%' }}>
        <SideDrawer show={sideDrawerOpen} click={drawerToggleClickHandler}/>
  
        <main>
        
        <div onClick={drawerToggleClickHandler2}>
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={drawerToggleClickHandler} />
        </div>
                  <Route exact path="/" component={Landing}/>
                  <Route path="/search/:zip" component={Listings}/>
                  <Route path="/post/:id" component={Post}/>
                  <Route path="/add" component={Add}/>
                  <Route path="/myinventory" component={Inventory}/>
                  <Route path="/mygaragesale" component={Garagesale}/>
                  <Route path="/myprofile" component={Myprofile}/>
                  <Route path="/savedgaragesale" component={Savedgaragesales}/>
                  <Route path="/watchlist" component={Watchlist}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/items/:item" component={ItemSearch}/>
        </div>
          
        </main>
      </div>
      </Router>
    </Provider>
  )
}

// Things to look at
// Need keys for googlemap pins on Listings.js
// Make the list the default view for listings.js looks better imo
// make times and days garage sales are open and closed !very important!
// need to add save garage into posts as well
// There is a bug where when you click save garage sales it adds that sale more than once i think it happens with saving items to wishlist as well...might be with all the use states or i just messed something up bad
//when you add a garage sale it asks twice where your location is...
//adding inventory also adds items to watchlist
//need to add authroute to watchlist