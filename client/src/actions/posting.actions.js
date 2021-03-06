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

  export function getSavedSales(userid) {
    console.log('usertest', userid)
    axios.get("/api/usersavedsales?id=" + userid).then(resp => {
      store.dispatch({
        type: "SAVED_SALES",
        payload: resp.data
      })
      console.log(resp.data)
    })
  }

  export function getWatchList(userid) {
    console.log('usertest', userid)
    axios.get("/api/getwatchlist?id=" + userid).then(resp => {
      store.dispatch({
        type: "WATCHLIST",
        payload: resp.data
      })
      console.log('hi', resp.data)
    })
  }

  export function saveSale(user_id, post_id){
    axios.post('/api/savesale', {
      user_id: user_id,
      post_id: post_id
    })
  }

  export function watchItem(user_id, item_id){
    console.log('item id', item_id)
    axios.post('/api/watchitem', {
      user_id: user_id,
      item_id: item_id
    })
  }


export function sendPost(Id){
    axios.post ('/api/post/',{  }).then(resp => {
      getPosts()
    })
  }

export function createPost(city, state, zip, address, date, images, id, fromTime, toTime) {
  console.log(fromTime, toTime)
  axios.post('/api/createPost', {
    city: city,
    state: state,
    zip: zip,
    address: address,
    date: date,
    images: images,
    user_id: id,
    from_time: fromTime,
    to_time: toTime
  }).then(resp => {
    console.log(resp.data)
  })
}
export function ratePost(user_id, post_id, rating) {
  axios.post('/api/ratePost', {
    user_id: user_id,
    post_id: post_id,
    rating: rating
  }).then(resp => {
    checkIfRated(user_id, post_id)
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
export function removeWatchItem(id, userid) {
  console.log(id)
  axios.get('/api/removeWatchItem?id=' + id).then(resp => {
    getWatchList(userid)
  })
}