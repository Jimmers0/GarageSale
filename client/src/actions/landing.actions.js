import store from '../store'
import axios from 'axios'

export function grabPosts(zip) {
    axios.get('/api/getPosts/' + zip).then(resp => {
        store.dispatch({
            type: 'LISTINGS',
            payload: resp.data
        })
            
        
    })
}
export function getCords(zip) {
    axios.get('/api/getCords?zip=' + zip).then(resp => {
        store.dispatch({
            type: "GET_CORDS",
            payload: resp.data
        })
    })
}