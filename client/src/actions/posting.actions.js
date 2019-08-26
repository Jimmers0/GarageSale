import axios from 'axios'
import store from '../store'



export function getPosts(id) {
    axios.get("/api/post?id=" + id).then(resp => {
      store.dispatch({
        type: "GET_POSTS",
        payload: resp.data
      })
    })
  }
  export function getItems(id) {
    axios.get("/api/items?id=" + id).then(resp => {
      store.dispatch({
        type: "GET_ITEMS",
        payload: resp.data
      })
    })
  }


export function sendPost(Id){
    axios.post ('/api/post/',{  }).then(resp => {
      getPosts()
    })
  }
  