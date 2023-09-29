import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes } from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import { store } from './assets/redux/store'
import '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes />
      </Router>
    </React.StrictMode>
  </Provider>
)
