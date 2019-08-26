import React, { useState } from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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