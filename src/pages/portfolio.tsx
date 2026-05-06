import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import Project from '../components/project/project'
import SEO from '../components/seo/seo'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <SEO
        title="Portfólio Arquitetura | Ibirité e BH"
        description="Portfólio de projetos arquitetônicos em Ibirité e Belo Horizonte. Veja projetos reais de cozinhas, salas, áreas gourmet e mais. Solicite orçamento!"
        canonical="/portfolio"
      />
      <section
        className="page-header-section"
        style={{ backgroundImage: `url(/img/bg.jpg)` }}
      >
        <Navbar />
        <Sidebar />
        <div className="container">
          <h1 className="header-title">
            Portfólio<span>.</span>
          </h1>
        </div>
      </section>

      <section className="spad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="gallery-tag">Nosso trabalho</p>
              <h2 className="gallery-title">Projetos realizados</h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginBottom: '0.5rem'
                }}
              >
                Cada projeto nasce de uma escuta cuidadosa e evolui até se
                tornar um espaço que reflete quem o habita. Ao longo de mais de
                5 anos de atuação em Belo Horizonte e região, a Eliá Arquitetura
                desenvolveu projetos residenciais e comerciais que equilibram
                estética, funcionalidade e viabilidade financeira.
              </p>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#555'
                }}
              >
                Navegue pelas categorias abaixo e conheça os ambientes que já
                transformamos — salas, cozinhas, áreas gourmet, escritórios,
                lojas e muito mais. Clique em qualquer projeto para ver as fotos
                completas do espaço.
              </p>
            </div>
          </div>
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
          Copyright &copy; {new Date().getFullYear()} Eliá Arquitetura. Todos os
          direitos reservados.
        </div>
      </footer>
    </div>
  )
}
