import store from '../store'
import axios from 'axios'




export function getInventory() {
    
    axios.post('/api/inventory', {
        // pull userID 
        userID: 1
    }).then(resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'INVENTORY',
            payload: resp.data
          })
    })
}