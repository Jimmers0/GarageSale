import store from '../store'
import axios from 'axios'

export function grabProfileDetails(id) {
    axios.get('/api/getProfile?id=' + id).then(resp => {
        store.dispatch({
            type: "PROFILE",
            payload: resp.data
        })
    })
}