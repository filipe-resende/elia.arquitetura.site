import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Projects from '../pages/projects'

export const Routes = () =>
  useRoutes([
    {
      path: '*',
      element: <Home />
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/inicio',
      element: <Home />
    },
    {
      path: '/sobre',
      element: <About />
    },
    {
      path: '/projetos/:projeto',
      element: <Projects />
    }
  ])
