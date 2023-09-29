import instagramReducer from './reducers/instagram'
import { combineReducers } from 'redux'

export default combineReducers({
  instagram: instagramReducer
})
