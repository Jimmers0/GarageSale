import store from '../store'
import axios from 'axios'


if(localStorage.getItem('token')){
    console.log('true')
    setInterceptors(localStorage.getItem('token'))
    store.dispatch({
        type: "LOGGED",
        payload: 'true'
        
    })
} else {
    console.log('true')
    store.dispatch({
        type: "LOGGED",
        payload: 'false'
    })
}

export function checkLogin() {
    if (localStorage.getItem('token')) {
        axios.get('/api/checkValids').then(resp => {
            if (resp.data.validated) {
                store.dispatch({
                    type: "INVALID_REDIRECT",
                    payload: resp.data.validated
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
    console.log(username, password)
    axios.post('/api/login', {
      username: username,
      password: password}
      ).then(resp => {
        const token = resp.data.token
        localStorage.setItem('token', token)
        setInterceptors(token)
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
}

