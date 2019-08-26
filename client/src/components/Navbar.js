import React, { useState } from 'react'
import {Menu} from 'semantic-ui-react'

export default props => {
    const [activeNav, setActiveNav] = useState('')
    console.log(props)

    return (
        <Menu inverted>
        <Menu.Item
          name='Search'
          active={activeNav === "search"}
          onClick={e => setActiveNav('search')}
        />
        <Menu.Item
          name='Post'
          active={activeNav === "post"}
          onClick={e => setActiveNav('post')}
        />
        <Menu.Item
          name='FAQ'
          active={activeNav === "faq"}
          onClick={e => setActiveNav('faq')}
        />
      </Menu>
    )
}