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

  export function saveSale(sale){
    console.log('sale:', sale)
    store.dispatch ({
      type: 'ADD',
      payload: sale
               
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