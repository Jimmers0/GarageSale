import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getWatchList, removeWatchItem } from '../actions/posting.actions'
import { checkLogin} from '../actions/login.actions';
import { Button } from 'semantic-ui-react'

export default props => {

    const watchlist = useSelector(appState => appState.watchlist)
    const userDetails = useSelector(appState => appState.userDetails)
    let userid = userDetails[0].id
    const loginValid = useSelector(appState => appState.authRedirect)
    
    console.log(watchlist)

    useEffect (() => {
        checkLogin()
    
        

    },[])
    useEffect (() => {
        
    getWatchList(userid)
        

    },[loginValid, userid])

    return loginValid ?
        <div>
        {watchlist.map(item => {
            return (
                <div className="saleItem">
                <div className="itemImage">
                    <img src={item.picture} alt=""/>
                </div>
                <div className="itemDescription">
                    <p>{item.item_name}</p>
                    <p>${Number(item.price).toFixed(2)}</p>

        

                    <p>{item.condition}</p>
                    <p>{item.sold === 1 ? <div>Sold</div>: ''}</p>
                    <div id="removeWatch">
                        <Button color="red" size="tiny" onClick={e => removeWatchItem(item.id, userid)}>Remove</Button>
                    </div>

                </div>
            </div>
            )
        })}
        </div>
     : <div className="fuckOff"><p>Please login to use this feature</p></div>
}