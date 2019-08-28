import React, { useState } from 'react'
import {Link} from 'react-router-dom'
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


    return (
     
        <Menu inverted>
          <Link to="/">
        <Menu.Item
          name='Search'
          active={activeNav === "search"}
          value="search"
        /></Link>
        <Link to="/add">
        <Menu.Item
          name='Post'
          active={activeNav === "post"}
        /></Link>
        <Link to="/">
        <Menu.Item
          name='FAQ'
          active={activeNav === "faq"}
        /></Link>
      </Menu>


      
      
      
    )
}