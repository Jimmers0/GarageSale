const initialState = {
  listings : [],
  post: [],
  items: [],
  savedsales: [],
  authRedirect: false,
  logged: '',
  loginResponse: '',
  searchCords: {},
  inventory: [],
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "LOGGED":
      return {...state, logged: action.payload}
    case 'LISTINGS':
      return {...state, listings: action.payload}
    case 'GET_POSTS':
      return {...state, post: action.payload}
    case "GET_ITEMS":
      return {...state, items: action.payload}
    case 'ADD':
      return {...state, savedsales:[ action.payload, ...state.savedsales]}
    case "INVALID_REDIRECT":
      return {...state, authRedirect: action.payload}
    case "LOGIN_STATUS":
      return {...state, loginResponse: action.payload}
    case "GET_CORDS":
      return {...state, searchCords: action.payload}
      case 'INVENTORY':
        return {...state, inventory: action.payload}
      case 'GET_ITEMS':
        return {...state, items: action.payload}
    default:
      return state
  }
}