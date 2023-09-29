import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducer from './reducer'
import { routerMiddleware } from 'react-router-redux'
import history from './history'
import middlewareFetch from './middleware/index'

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history)

const getMiddleware = () => {
  return applyMiddleware(myRouterMiddleware, middlewareFetch)
}

export const store = createStore(reducer, composeWithDevTools(getMiddleware()))
