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

export function createPost(name, city, state, zip, address, date, images, id) {
  axios.post('/api/createPost', {
    name: name,
    city: city,
    state: state,
    zip: zip,
    address: address,
    date: date,
    images: images,
    user_id: id
  }).then(resp => {
  })
}
export function ratePost(user_id, post_id, rating) {
  axios.post('/api/ratePost', {
    user_id: user_id,
    post_id: post_id,
    rating: rating
  }).then(resp => {
  })
}
export function checkIfRated(user_id, post_id) {
  axios.post('/api/checkIfRated', {
    user_id: user_id,
    post_id: post_id
  }).then(resp => {
    store.dispatch({
      type: "CHECK_IF_RATED",
      payload: resp.data
    })
  })
}