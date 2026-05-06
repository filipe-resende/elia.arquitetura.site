import { useRoutes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Projects from '../pages/projects'
import Portfolio from '../pages/portfolio'
import Arquiteta from '../pages/arquiteta'
import ArquitetoIbirite from '../pages/ArquitetoIbirite'
import ProjetosIbirite from '../pages/ProjetosIbirite'
import InterioresIbirite from '../pages/InterioresIbirite'

export const Routes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre', element: <About /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/arquiteta', element: <Arquiteta /> },
    { path: '/projetos/:projeto', element: <Projects /> },
    { path: '/arquiteto-em-ibirite', element: <ArquitetoIbirite /> },
    { path: '/projetos-residenciais-ibirite', element: <ProjetosIbirite /> },
    { path: '/arquitetura-interiores-ibirite', element: <InterioresIbirite /> },
    { path: '*', element: <Home /> }
  ])
