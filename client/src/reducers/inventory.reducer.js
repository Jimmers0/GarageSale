const initialState = {
    inventory: [],
    items: [],
    
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'INVENTORY':
        return {...state, reducer: action.payload}
      case 'GET_ITEMS':
        return {...state, items: action.payload}
        default:
        return state
    }
  }