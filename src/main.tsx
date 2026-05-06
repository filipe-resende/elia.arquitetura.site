import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import './index.css'
import { Routes } from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './assets/redux/store'
import { WhatsappButton } from './components/whatsapp/whatsapp'
// import Landing from './components/landing/landing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes />
        {/* <Landing /> */}
        <WhatsappButton />
      </Router>
    </React.StrictMode>
  </Provider>
)
