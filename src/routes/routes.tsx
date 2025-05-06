import React from 'react'
import { useRoutes } from 'react-router-dom'
import App from '../pages/home'
import About from '../pages/about'
import Budget from '../pages/budget'
import Projects from '../pages/projects'

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/inicio',
      element: <App />
    },
    {
      path: '/sobre',
      element: <About />
    },
    {
      path: '/orcamento',
      element: <Budget />
    },
    {
      path: '*',
      element: <App />
    },
    {
      path: '/projetos/:projeto',
      element: <Projects />
    }
  ])
