
const initialState = {
    post: [],
    items: [],
    
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'GET_POSTS':
        return {...state, post: action.payload}
      case 'GET_ITEMS':
        return {...state, items: action.payload}
        default:
        return state
    }
  }