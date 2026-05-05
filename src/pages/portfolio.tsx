import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Project from '../components/project/project'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <Navbar />

      <section
        className="page-header-section"
        style={{ backgroundImage: `url(/img/bg.jpg)` }}
      >
        <div className="container">
          <h1 className="header-title">
            Portfólio<span>.</span>
          </h1>
        </div>
      </section>

      <Project />

      <section className="promo-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 promo-text">
              <h1 style={{ textAlign: 'left' }}>
                Gostou de algum <span>projeto</span>?
              </h1>
              <p>
                Solicite um orçamento personalizado e transforme seu espaço com
                a identidade que ele merece.
              </p>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn sb-dark mt-4"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-social">
          <div className="social-links">
            <a
              href="https://br.pinterest.com/studioeliarq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-pinterest"></i>
            </a>
            <a
              href="https://www.instagram.com/eliastudioarq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/eliastudioarq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-item">
                    <ul>
                      <li>
                        <NavLink to="/">Início</NavLink>
                      </li>
                      <li>
                        <NavLink to="/portfolio">Portfólio</NavLink>
                      </li>
                      <li>
                        <NavLink to="/arquiteta">Arquiteta</NavLink>
                      </li>
                      <li>
                        <NavLink to="/sobre">Sobre nós</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()} Eliá Arquitetura. Todos
          os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
