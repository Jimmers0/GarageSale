const initialState = {
  listings : [],
  post: [],
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LISTINGS':
      return {...state, listings: action.payload}
    case 'GET_POSTS':
      return {...state, post: action.payload}
    case "GET_ITEMS":
      return {...state, items: action.payload}
    default:
      return state
  }
}