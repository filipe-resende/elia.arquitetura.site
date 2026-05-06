import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import SEO from '../components/seo/seo'

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
    loja: ['projeto-loja-ibirite.jpg', 'projeto-loja-ibirite-2.jpg', 'projeto-loja-ibirite-3.jpg'],
    escritorio: ['projeto-escritorio-ibirite.jpg'],
    estetica: ['projeto-estetica-beleza-ibirite.jpg', 'projeto-estetica-beleza-ibirite-2.jpg', 'projeto-estetica-beleza-ibirite-3.jpg'],
    gourmet: ['projeto-area-gourmet-ibirite.jpg', 'projeto-area-gourmet-ibirite-2.jpg'],
    cozinha: ['projeto-cozinha-moderna-ibirite.jpg', 'projeto-cozinha-moderna-ibirite-2.jpg', 'projeto-cozinha-moderna-ibirite-3.jpg'],
    lazer: ['projeto-lazer-gourmet-ibirite.jpg', 'projeto-lazer-gourmet-ibirite-2.jpg', 'projeto-lazer-gourmet-ibirite-3.jpg'],
    area: ['projeto-area-convivio-ibirite.jpg', 'projeto-area-convivio-ibirite-2.jpg', 'projeto-area-convivio-ibirite-3.jpg'],
    sacada: ['projeto-sacada-moderna-ibirite.jpg', 'projeto-sacada-moderna-ibirite-2.jpg', 'projeto-sacada-moderna-ibirite-3.jpg'],
    sala: ['projeto-sala-estar-ibirite.jpg', 'projeto-sala-estar-ibirite-2.jpg', 'projeto-sala-estar-ibirite-3.jpg']
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
  const categoriaAtual = categorias.find(c => c.rota === projeto)
  const tituloCategoria = categoriaAtual?.titulo ?? 'Projeto'

  return (
    <div className="project">
      <SEO
        title={`${tituloCategoria} — Projeto em BH e Ibirité`}
        description={`Veja o projeto de ${tituloCategoria.toLowerCase()} desenvolvido pela Elis Araujo Arquiteta em Belo Horizonte e Ibirité. Solicite seu orçamento!`}
        canonical={`/projetos/${projeto}`}
      />
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
