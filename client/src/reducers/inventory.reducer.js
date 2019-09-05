const initialState = {
    inventory: [],
    items: [],
    loginID: '',
    
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_ID':
        return {...state, loginID: action.payload}
      case 'INVENTORY':
        return {...state, reducer: action.payload}
      case 'GET_ITEMS':
        return {...state, items: action.payload}
        default:
        return state
    }
  }