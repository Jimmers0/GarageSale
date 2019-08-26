import React, {useState, useEffect } from 'react'
import {getPost, sendPost} from '../actions/posting.actions'


export default props =>{

    const[id, setid]= useState('')
    


useEffect (() => { 
getPost(props)
},[props])
 

function handleSubmit(e) {
e.preventDefault()
sendPost (id)

}   

return (
    <div>
        <h1>Posting{id}</h1>
        <form className="id"onSubmit={handleSubmit}>
            <label htmlFor="id">id</label>
            <input id="id" type="text" name="id" value={id} onChange={e => setid(e.target.value)}/>
        </form>
    </div>
)
}
