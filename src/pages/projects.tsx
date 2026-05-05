import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'

const categorias = [
  { rota: 'loja', titulo: 'Lojas' },
  { rota: 'escritorio', titulo: 'Escritório' },
  { rota: 'estetica', titulo: 'Estúdio de Beleza' },
  { rota: 'gourmet', titulo: 'Área Gourmet' },
  { rota: 'cozinha', titulo: 'Cozinha' },
  { rota: 'lazer', titulo: 'Área Gourmet II' },
  { rota: 'area', titulo: 'Área de Convívio' },
  { rota: 'sacada', titulo: 'Sacada' },
  { rota: 'sala', titulo: 'Sala' }
]

export default function Projects() {
  const { projeto } = useParams()

  const path = '/img/projetos/'

  const chaveValor: Record<string, string[]> = {
    loja: ['capa-loja.jpg', 'loja1.jpg', 'loja2.jpg'],
    escritorio: ['capa-escritorio.jpg', 'escritorio1.jpg', 'escritorio2.jpg'],
    estetica: ['estetica-capa.jpg', 'estetica1.jpg', 'estetica2.jpg'],
    gourmet: ['gourmet-capa.jpg', 'gourmet1.jpg', 'gourmet2.jpg'],
    cozinha: ['cozinha-capa.jpg', 'cozinha1.jpg', 'cozinha2.jpg'],
    lazer: ['area-gourmet-capa.jpg', 'area-gourmet1.jpg', 'area-gourmet2.jpg'],
    area: ['area-lazer-capa.jpg', 'area-lazer1.jpg', 'area-lazer2.jpg'],
    sacada: ['sacada-capa.jpg', 'sacada1.jpg', 'sacada2.jpg'],
    sala: ['sala-capa.jpg', 'sala1.jpg', 'sala2.jpg']
  }

  function getImages() {
    if (projeto && projeto in chaveValor) {
      return chaveValor[projeto].map(img => path + img)
    } else {
      return chaveValor['loja'].map(img => path + img)
    }
  }

  const images = getImages()
  const outras = categorias.filter(c => c.rota !== projeto)

  return (
    <div className="project">
      <section
        className="page-header-section"
        style={{ backgroundImage: `url(/img/bg.jpg)` }}
      >
        <Navbar />
        <Sidebar />
        <div className="container">
          <h1 className="header-title">
            Projetos<span>.</span>
          </h1>
        </div>
      </section>

      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            {images.map((item, index) => (
              <Image style={{ padding: '1vw' }} src={`${item}`} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="spad" style={{ background: '#f8f8f8' }}>
        <div className="container">
          <h3
            style={{
              marginBottom: '1.5rem',
              fontSize: '1.1rem',
              fontWeight: 600
            }}
          >
            Outros projetos
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {outras.map(cat => (
              <NavLink
                key={cat.rota}
                to={`/projetos/${cat.rota}`}
                style={{
                  padding: '0.5rem 1.25rem',
                  border: '1px solid #222',
                  borderRadius: '2px',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  color: '#222'
                }}
              >
                {cat.titulo}
              </NavLink>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <NavLink
              to="/portfolio"
              style={{
                fontSize: '0.875rem',
                color: '#666',
                textDecoration: 'underline'
              }}
            >
              ← Ver portfólio completo
            </NavLink>
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
