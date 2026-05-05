import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

const navItems = [
  {
    label: 'Portfólio',
    to: '/portfolio',
    icon: 'fa-th-large',
    external: false
  },
  {
    label: 'Arquiteta',
    to: '/arquiteta',
    icon: 'fa-user',
    external: false
  },
  {
    label: 'Sobre nós',
    to: '/sobre',
    icon: 'fa-info-circle',
    external: false
  },
  {
    label: 'Orçamento',
    to: WA_LINK,
    icon: 'fa-whatsapp',
    external: true
  }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="header-area" ref={panelRef}>
      <button
        className={`mobile-nav-toggle${open ? ' is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>

      <div className="contact-card">
        <a href="mailto:eliastudioarq@gmail.com" className="contact-card-item">
          <i className="fa fa-envelope" />
          <span>eliastudioarq@gmail.com</span>
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card-item"
        >
          <i className="fa fa-whatsapp" style={{ color: '#25D366' }} />
          <span>+55 (31) 97342-2196</span>
        </a>
        <a
          href="https://www.instagram.com/eliastudioarq/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card-item"
        >
          <i className="fa fa-instagram" style={{ color: '#E1306C' }} />
          <span>@eliastudioarq</span>
        </a>
      </div>

      {/* Backdrop */}
      {open && <div className="mobile-nav-backdrop" onClick={close} />}

      {/* Painel lateral direito */}
      <nav className={`mobile-nav${open ? ' mobile-nav--open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="mobile-nav-brand">Eliá Arquitetura</span>
          <button
            className="mobile-nav-close"
            onClick={close}
            aria-label="Fechar"
          >
            <i className="fa fa-times" />
          </button>
        </div>
        {navItems.map((item, i) =>
          item.external ? (
            <a
              key={i}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-item"
              style={{ transitionDelay: open ? `${i * 55}ms` : '0ms' }}
              onClick={close}
            >
              <i className={`fa ${item.icon}`} />
              {item.label}
            </a>
          ) : (
            <NavLink
              key={i}
              to={item.to}
              className="mobile-nav-item"
              style={{ transitionDelay: open ? `${i * 55}ms` : '0ms' }}
              onClick={close}
            >
              <i className={`fa ${item.icon}`} />
              {item.label}
            </NavLink>
          )
        )}
      </nav>
    </header>
  )
}
