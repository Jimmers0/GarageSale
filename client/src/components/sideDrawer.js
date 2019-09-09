import React, { useState } from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {useSelector} from 'react-redux'
import { logout, checkLogin } from '../actions/login.actions'
import {Link} from 'react-router-dom'

import '../styles/SideDrawer.css'

export default props => {

    let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
    const login = useSelector(appState => appState.logged)
    const userDetails = useSelector(appState => appState.userDetails)

    let user = userDetails[0].id

  return (
    <nav className={drawerClasses}>

<div className="sidesearch">
    <Link to="/">
        <div className="item" onClick={props.click}> 
            <div className="icon">
                <MaterialIcon icon="search" size={20} color={colorPalette.grey._50} /> 
            </div>
            <div className="buttontxt">
                Search
            </div>
        </div>
     </Link>
 </div>

 <Link to="/add">
 <div className="buttonside" onClick={props.click}>
    
    <div className="icon">
        <MaterialIcon icon="create" size={20} color={colorPalette.grey._50} /> 
    </div>
    <div className="buttontxt">
        Add GarageSale
    </div>
</div>
</Link>

<Link to="/myinventory">
<div className="buttonside" onClick={props.click}> 
    <div className="icon">
        <MaterialIcon icon="view_comfy" size={20} color={colorPalette.grey._50} /> 
    </div>
    <div className="buttontxt">
        My Inventory
    </div>
</div>
</Link>


<Link to="/mygaragesale">
    <div className="item" onClick={props.click}>
    <div className="icon">
        <MaterialIcon icon="storefront" size={20} color={colorPalette.grey._50} /> 
    </div>
    <div className="buttontxt">
        My GarageSale
    </div>
</div>
</Link>
      

<Link to="/savedgaragesale">
<div className="item" onClick={props.click}> 
    <div className="icon">
        <MaterialIcon icon="gps_fixed" size={20} color={colorPalette.grey._50} /> 
    </div>
    <div className="buttontxt">
        Saved Sales
    </div>
</div>
</Link>
        
<Link to="/watchlist">  
<div className="item" onClick={props.click}> 
    <div className="icon">
        <MaterialIcon icon="remove_red_eye" size={20} color={colorPalette.grey._50} /> 
    </div>
    <div className="buttontxt">
        Watchlist
    </div>
</div>
</Link>

<div>
    {!login ? 
        <Link to="/login">
            <div className="item" onClick={props.click}>
        <div className="icon">
            <MaterialIcon icon="account_box" size={20} color={colorPalette.grey._50} /> 
        </div>
        <div className="buttontxt">
            Login
        </div> 
    </div>
    </Link>
        : 
        <Link to="/" onClick={logout}>
            <div className="item" onClick={props.click} >
        <div className="icon">
            <MaterialIcon icon="account_box" size={20} color={colorPalette.grey._50} /> 
        </div>
        <div className="buttontxt">
            Log Out
        </div>
    </div>
</Link>
}
</div>
    </nav>
  )
}

