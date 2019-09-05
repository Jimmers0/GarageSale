import store from '../store'
import axios from 'axios'




export function getInventory(userID) {
    
    axios.post('/api/inventory', {
        // pull userID 
        userID: userID
    }).then(resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'INVENTORY',
            payload: resp.data
          })
    })
}