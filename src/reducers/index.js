import { combineReducers } from 'redux'
import todos from './todos'
import api from './api'

const rootReducer = combineReducers({
  todos,
  api
})

export default rootReducer
