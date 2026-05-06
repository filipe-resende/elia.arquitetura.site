import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Projects from '../pages/projects'
import Portfolio from '../pages/portfolio'
import Arquiteta from '../pages/arquiteta'

export const Routes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre', element: <About /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/arquiteta', element: <Arquiteta /> },
    { path: '/projetos/:projeto', element: <Projects /> },
    { path: '*', element: <Home /> }
  ])
