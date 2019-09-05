import store from '../store'
import axios from 'axios'


if(localStorage.getItem('token')){
    setInterceptors(localStorage.getItem('token'))
    store.dispatch({
        type: "LOGGED",
        payload: true
    })
}

export function checkLogin() {
    if (localStorage.getItem('token')) {
        axios.get('/api/checkValids').then(resp => {
            console.log(resp.data)
            if (resp.data.validated) {
                store.dispatch({
                    type: "INVALID_REDIRECT",
                    payload: resp.data
                })
            }
        })
    }
}

function setInterceptors(){
    axios.interceptors.request.use(
        reqConfig => {
            reqConfig.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
            return reqConfig
        },
        err => Promise.reject(err) 
    );
}
export function login(username, password){
    axios.post('/api/login', {
      username: username,
      password: password}
      ).then(resp => {
        const token = resp.data.token
        localStorage.setItem('token', token)
        setInterceptors(token)
        store.dispatch({
            type: "LOGGED",
            payload: true
        })
    }).catch(error => {
        store.dispatch({
            type: "LOGIN_STATUS",
            payload: error.response.data.message
        })
    })
}
export function register(username, password, first_name, last_name){
    console.log(username, password, first_name, last_name)
    axios.post('/api/register', {
      username: username, 
      password: password, 
      first_name: first_name, 
      last_name: last_name
    }).then(resp => {
    })
}

export function logout(){
    localStorage.removeItem('token')
    store.dispatch({
        type: "LOGGED",
        payload: false
    })
}

