import store from '../store'
import axios from 'axios'

export function grabPosts(zip) {
    axios.get('/api/getPosts/' + zip).then(resp => {
        
    })
}