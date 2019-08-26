const initialState = {
  listings : []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LISTINGS':
      return {...state, listings: action.payload}
    default:
      return state
  }
}