const initialState = {
  listings : [],
  post: [],
  items: [],
  savedsales: [],
  authRedirect: false,
  logged: ''

}

export default function(state = initialState, action) {
  switch (action.type) {
    case "LOGGED":
      return {logged: action.payload}
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
    default:
      return state
  }
}