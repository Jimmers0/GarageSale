import axios from 'axios'
//import store from '../store'



export function getPosts() {
    axios.get("/api/post/" ).then(resp => {
      getPosts({
        type: "GET_POSTS",
        payload: resp.data
      })
    })
  }


export function sendPost(Id){
    axios.post ('/api/post/',{  }).then(resp => {
      getPosts()
    })
  }
  