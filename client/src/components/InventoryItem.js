import React, {useState} from 'react'
import { markAsSold } from '../actions/inventory.actions'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default props => {
    const [button, setButton] = useState(false)
    function mark(id) {
        markAsSold(id)
        setButton(true)
    }

    return (
<div className="inventoryitem">
    <div>
        <img id="inventoryImage" src={props.item.picture} alt=""/>
    </div>
    <div className="infocontainer">
        <div className="iteminfo">
            <div>{props.item.item_name}</div>
            <div>Condition: {props.item.item_condition}</div>
            <div>Price: {props.item.price}</div>
        </div>
        <div>
        {props.item.sold > 0 ? <div className="sold">SOLD</div> : <div><Link to="/myinventory"><Button onClick={e => mark(props.item.id)} disabled={button} color="red">Mark as Sold</Button></Link></div>}
        </div>
    </div> 
</div>
    )
}