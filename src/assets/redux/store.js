import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'
import middlewareFetch from './middleware/index'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middlewareFetch))
)
