import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import '../styles/landing.css'

export default props => {
const [zip, setZip] = useState('')
const [item, setItem] = useState('')

function searchIt() {
    props.history.push('/search/' + zip)
}
function searchItem() {
    props.history.push('/items/' + item)
}

    return (
        <div id="landingWrapper">
            <div id="search">
                <div className="logo"><img src="https://i.imgur.com/8tmr7Z3.png" alt="" id="logo"/></div>
                <div>
                <form id="searchForm" onSubmit={searchIt}>
                    
                    <div>
                    <input id="zip1" type="text" placeholder="Search using zip" value={zip} onChange={e => setZip(e.target.value)} />
                    <button className="button1" type="submit" primary><i class="large inverted search icon" color="white"></i></button>
                    </div>
                </form>
                </div>
                <div>
                <form id="searchForm" onSubmit={searchItem}>
                    <div>
                    <input id="zip2" type="text" value={item} placeholder="Search for item" onChange={e => setItem(e.target.value)} />
                    <button className="button2" type="submit" secondary><i class="large inverted search icon" color="white"></i></button>
                   </div>
                </form>
                </div>
            </div>
        </div>
    )
}