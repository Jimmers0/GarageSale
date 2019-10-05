import React, {useEffect } from 'react'
import {useSelector} from 'react-redux'
import {getPosts, getItems, ratePost, checkIfRated, watchItem} from '../actions/posting.actions'
import '../styles/post.css'
import moment from 'moment'
import { saveSale } from '../actions/posting.actions'
import {Button, Icon} from 'semantic-ui-react'
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
        checkIfRated(userDetails[0].id, props.match.params.id)
    },[props, userDetails])

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
    function watchItems(user, item) {
        watchItem(user, item)
    }
return (
    <div id="garageViewWrapper">
        {post.map(item => {
            return (
                <div id="garageDescription">
                <h1>{item.address}</h1>
                <h3>Date: {moment(item.date).format("dddd MM/DD")}</h3>
                <h3>Time: {item.from_time} - {item.to_time}</h3>
                <Link className="profileLink" to={"/profile/" + item.user_id}>View poster profile</Link>
                <p><Icon color="green" name="thumbs up outline"/> {checkRate.filter(item => item.rating < 1).length}</p>
                <p><Icon color="red" name="thumbs down outline"/> {checkRate.filter(item => item.rating > 0).length}</p>
                {checkRate.length > 0 ? "" : <div><Button onClick={thumbsUp}><Icon color="red" style={{fontWeight: "600"}} name="thumbs down outline"/></Button>
                <Button onClick={thumbsDown}><Icon tyle={{fontWeight: "600"}} color="green" name="thumbs up outline"/></Button></div>}
                {userDetails.length > 0 ? <Button size="small" color="red" id="saveButtonPost" type="submit" onClick={e => saveSale(userDetails[0].id, item.postID)}>
                  Save
                  </Button> : ""}
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
                        <p>{item.sold === 1 ? <div>Sold</div>: ''}</p>
                    </div>
                    <div>
                        <button className="itembutton" type="button" onClick={e => watchItems(user, item.id)}>Watch</button>
                    </div>
                </div>
                
        </div>
        )
    })}
    </div>
)
}