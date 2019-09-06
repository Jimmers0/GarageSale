import React, {useState} from 'react'
import { markAsSold } from '../actions/inventory.actions'
import { Button } from 'semantic-ui-react'

export default props => {
    const [button, setButton] = useState(false)
    function mark(id) {
        markAsSold(id)
        setButton(true)
    }

    return (
<div>
<img id="inventoryImage" src={props.item.picture} alt=""/>
<p>{props.item.item_name}</p>
<p>Condition: {props.item.item_condition}</p>
<p>Price: {props.item.price}</p>
{props.item.sold > 0 ? <p>SOLD</p> : <Button onClick={e => mark(props.item.id)} disabled={button}>Mark as Sold</Button>}
</div>
    )
}