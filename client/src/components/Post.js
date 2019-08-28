import React, {useEffect } from 'react'
import {useSelector} from 'react-redux'
import {getPosts, getItems} from '../actions/posting.actions'
import '../styles/garageView.css'
import moment from 'moment'


export default props =>{
    const post = useSelector(appState => appState.post)
    const items = useSelector(appState => appState.items)
    
    useEffect (() => {
        getPosts(props.match.params.id)
        getItems(props.match.params.id)
    },[props.match.params.id])
return (
    <div id="garageViewWrapper">
        {post.map(item => {
            return (
                <div id="garageDescription">
                <h1>{item.name}</h1>
                <p>Location: {item.address}</p>
                <p>Date: {moment(item.date).format("dddd MM/DD")}</p>
                <p>Time: 11:00AM - 6:00PM</p>
                </div>
            )
        })}
        <div className="itemsAt">
        <h1>Items at this garage sale</h1>
        </div>
    {items.map(item => {
        return (
            <div className="saleItem">
            <div className="itemImage">
                <img src={item.picture} alt=""/>
            </div>
            <div className="itemDescription">
                <p>{item.name}</p>
                <p>${Number(item.price).toFixed(2)}</p>
                <p>{item.condition}</p>
            </div>
        </div>
        )
    })}
    </div>
)
}