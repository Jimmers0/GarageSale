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

  export function getSavedSales(id) {
    axios.get("/api/usersavedsales?id=" + id).then(resp => {
      store.dispatch({
        type: "SAVED_SALES",
        payload: resp.data
      })
    })
  }

  export function saveSale(user_id, post_id){
    axios.post('/api/savesale', {
      user_id: user_id,
      post_id: post_id
    })
  }


export function sendPost(Id){
    axios.post ('/api/post/',{  }).then(resp => {
      getPosts()
    })
  }

export function createPost(name, city, state, zip, address, date, images) {
  axios.post('/api/createPost', {
    name: name,
    city: city,
    state: state,
    zip: zip,
    address: address,
    date: date,
    images: images
  }).then(resp => {
    console.log(resp.data)
  })
}