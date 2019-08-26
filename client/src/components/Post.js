import React, {useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import {getPosts, getItems} from '../actions/posting.actions'


export default props =>{
    const [id, setid] = useState('')
    const post = useSelector(appState => appState.post)
    const items = useSelector(appState => appState.items)
    console.log(post)
    
    useEffect (() => {
        getPosts(props.match.params.id)
        getItems(props.match.params.id)
    },[props.match.params.id])
 

function handleSubmit(e) {
e.preventDefault()

}

return (
    <div>
        {post.map(item => {
            return(
                <div>
            <h1>{item.name}</h1>
            {items.map(element => {
                return(
                    <div>
                        <p>{element.name}</p>
                    </div>
                )
            })}
            </div>
            )
        })}
    </div>
)
}