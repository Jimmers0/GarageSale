import store from '../store'
import axios from 'axios'

export function getInventory(userID) {
    axios.post('/api/inventory', {
        userID: userID
    }).then(resp => {
        store.dispatch({
            type: 'INVENTORY',
            payload: resp.data
          })
    })
}
export function markAsSold(id) {
    axios.get('/api/markAsSold?id=' + id).then(resp => {
        store.dispatch({
            type: "MARK_SOLD"
        })
    })
}