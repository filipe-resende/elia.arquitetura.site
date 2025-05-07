import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header-area">
      <NavLink to="/home" className="logo-area">
        <Image src="/img/logo.png" alt="Elía Studio Arquitetura"></Image>
      </NavLink>
      <div className="nav-switch" onClick={toggleNavbar}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="phone-number">
        <a
          href="https://api.whatsapp.com/send/?phone=553173422196&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <span
            style={{
              display: 'flex',
              gap: '8px'
            }}
          >
            +55 (31) 97342-2196
            <i
              className="fa fa-whatsapp"
              style={{ fontSize: '22px', color: 'black' }}
            />
          </span>
        </a>
      </div>
      <nav
        className="nav-menu"
        style={isOpen ? { display: 'block' } : { display: 'none' }}
      >
        <ul>
          <li>
            <NavLink to="/sobre">Sobre nós</NavLink>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=553173422196&text=Olá! Gostaria de solicitar um orçamento personalizado."
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça um orçamento
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=553173422196&text=Olá! Gostaria de solicitar um orçamento personalizado."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale conosco
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
