import React from 'react'
import { NavLink } from 'react-router-dom'
import '../navbar/navbar.css'

export default function Sidebar() {
  return (
    <>
      <div className="left-bar">
        <NavLink to="/home" className="logo-area">
          <span className="logo-text-title">Elia Arquitetura</span>
          <span className="logo-text-sub">Arq. Elis Regina</span>
        </NavLink>
        <div className="left-bar-content">
          <div className="social-links">
            <a href="https://br.pinterest.com/studioeliarq/">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="https://www.instagram.com/eliastudioarq/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/eliastudioarq">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <nav className="vertical-nav">
        <NavLink to="/portfolio">Portfólio</NavLink>
        <NavLink to="/arquiteta">Arquiteta</NavLink>
        <NavLink to="/sobre">Sobre nós</NavLink>
        <a
          href="https://api.whatsapp.com/send?phone=553173422196&text=Olá! Gostaria de solicitar um orçamento personalizado."
          target="_blank"
          rel="noopener noreferrer"
        >
          Orçamento
        </a>
      </nav>
    </>
  )
}
