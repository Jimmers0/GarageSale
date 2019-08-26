import React, { useState } from 'react'
import Autocomplete from 'react-google-autocomplete'
import {Button, Form} from 'semantic-ui-react'
import '../styles/post.css'
import Navbar from './Navbar'
import {createPost} from '../actions/posting.actions'

export default props => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [address, setAddress] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [results, setResults] = useState('')
    const [button, setButton] = useState(false)

    function addPost() {
        createPost(name, city, state, zip, address, date)
        setResults('Your garage sale has been successfully added to our system!')
        setCity('')
        setState('')
        setZip('')
        setAddress('')
        setDate('')
        setName('')
        setButton(true)
    }

    return (
        <div id="postWrap">
            <Navbar/>
            <Form id="postForm" onSubmit={addPost}>
            <h1>Add a Garage Sale</h1>
            <p>{results}</p>
            <Autocomplete
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
      console.log(place)
      setCity(place.address_components[2].long_name)
      setState(place.address_components[4].long_name)
      setZip(place.address_components[6].long_name)
      setAddress(`${place.address_components[0].long_name} ${place.address_components[1].long_name}`)
    }}
    types={['address']}
    componentRestrictions={{country: "us"}}
/>
<input type="date" onChange={e => setDate(e.target.value)}/>
<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name of Garage Sale"/>
<input type="text" value={address} placeholder="Address" onChange={e => setAddress(e.target.value)}></input>
<input type="text" value={city} placeholder="City" onChange={e => setCity(e.target.value)}></input>
<input type="text" value={state} placeholder="State" onChange={e => setState(e.target.value)}></input>
<input type="text" value={zip} placeholder="Zip" onChange={e => setZip(e.target.value)}></input>
<Button type="submit" primary disabled={button}>Submit</Button>
</Form>

        </div>
    )
}