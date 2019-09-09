import React, {useEffect } from 'react'
import {useSelector} from 'react-redux'
import {getPosts, getItems, ratePost, checkIfRated, watchItem} from '../actions/posting.actions'
import '../styles/post.css'
import moment from 'moment'
import { checkLogin } from '../actions/login.actions'
import { saveSale } from '../actions/posting.actions'
import {Button, Form, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'





export default props =>{
    const post = useSelector(appState => appState.post)
    const items = useSelector(appState => appState.items)
    const loginValid = useSelector(appState => appState.authRedirect)
    const userDetails = useSelector(appState => appState.userDetails)
    const checkRate = useSelector(appState => appState.checkRate)
    
    useEffect (() => {
        getPosts(props.match.params.id)
        getItems(props.match.params.id)
    },[props])
    useEffect(() => {
        checkIfRated(userDetails[0].id, props.match.params.id)
    }, [props,userDetails])

    let user = userDetails[0].id
    console.log(checkRate)

    function thumbsUp() {
        if (!loginValid) {
            props.history.push('/login')
        } else {
            ratePost(userDetails[0].id, props.match.params.id, 1)
        }
    }
    function thumbsDown() {
        if (!loginValid) {
            props.history.push('/login')
        } else {
            ratePost(userDetails[0].id, props.match.params.id, 0)
        }
    }
return (
    <div id="garageViewWrapper">
        {post.map(item => {
            return (
                <div id="garageDescription">
                <h1>{item.name}</h1>
                <p>Location: {item.address}</p>
                <p>Date: {moment(item.date).format("dddd MM/DD")}</p>
                <p>Time: 11:00AM - 6:00PM</p>
                <Link className="profileLink" to={"/profile/" + item.user_id}>View poster profile</Link>
                <p>Thumbs Up: {checkRate.filter(item => item.rating < 1).length}</p>
                <p>Thumbs Up: {checkRate.filter(item => item.rating > 0).length}</p>
                {checkRate.length > 0 ? "" : <div>                <button onClick={thumbsUp}>Thumbs Up</button>
                <button onClick={thumbsDown}>Thumbs Down</button></div>}
                {userDetails.length > 0 ?  <div>Save Sale {' '}
                  
                  <Button icon type="submit" size="small" color="red" onClick={e => saveSale(userDetails[0].id, item.postID)}>
                  <Icon name='black crosshairs' />
                  </Button></div> : ""}
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
                <div className="saleiteminfo">
                    <div className="itemDescription">
                        <p>{item.item_name}</p>
                        <p>${Number(item.price).toFixed(2)}</p>
                        <p>{item.item_condition}</p>
                    </div>
                    <div>
                        <button className="itembutton" type="button" onClick={watchItem(user, item.id)}>Watch</button>
                    </div>
                </div>
                
        </div>
        )
    })}
    </div>
)
}