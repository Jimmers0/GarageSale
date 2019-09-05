const initialState = {
  listings : [],
  post: [],
  items: [],
  savedsales: [],
  authRedirect: false,
  logged: false,
  loginResponse: '',
  searchCords: {},
  userDetails: [{id: 0}],
  resultItems: [],
  mySale: []
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
      return {...state, authRedirect: action.payload.validated, userDetails: [action.payload]}
    case "LOGIN_STATUS":
      return {...state, loginResponse: action.payload}
    case "GET_CORDS":
      return {...state, searchCords: action.payload}
    case "SAVED_SALES":
      
      return {...state, savedsales: action.payload}
    case "ITEM_SEARCH":
      return {...state, resultItems: action.payload}
    case "MY_SALE":
      return {...state, mySale: action.payload}
    default:
      return state
  }
}