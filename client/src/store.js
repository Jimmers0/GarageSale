import { createStore } from 'redux'

import exampleReducer from './reducers/search.reducer'

const store = createStore(exampleReducer)

export default store