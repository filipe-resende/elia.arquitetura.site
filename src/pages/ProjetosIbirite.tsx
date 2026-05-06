import { NavLink } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Project from '../components/project/project'
import SEO from '../components/seo/seo'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

export default function ProjetosIbirite() {
  return (
    <div>
      <SEO
        title="Projetos Residenciais em Ibirité | Eliá Arquitetura"
        description="Projetos residenciais em Ibirité MG. Veja o portfólio da Eliá Arquitetura — casas, interiores e reformas com arquiteta Elis Araujo. Orçamento grátis!"
        canonical="/projetos-residenciais-ibirite"
      />
      <Navbar />

      <section
        className="page-header-section"
        style={{ backgroundImage: `url(/img/bg.jpg)` }}
      >
        <div className="container">
          <h1 className="header-title">
            Projetos em Ibirité<span>.</span>
          </h1>
        </div>
      </section>

      <section className="intro-section pt100 pb50">
        <div className="container text-center">
          <h2 className="sp-title">
            Projetos <span>Residenciais</span> em Ibirité
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 40px' }}>
            Veja projetos reais desenvolvidos pela{' '}
            <strong>Eliá Arquitetura</strong> para clientes em{' '}
            <strong>Ibirité e Belo Horizonte</strong>. Cada projeto é único,
            pensado para o estilo de vida e o orçamento de cada cliente.
          </p>
        </div>
      </section>

      <Project />

      <section className="promo-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 promo-text">
              <h2 style={{ textAlign: 'left', color: '#fff' }}>
                Quer um projeto <span>assim em Ibirité</span>?
              </h2>
              <p>Solicite um orçamento personalizado sem compromisso.</p>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn sb-light mt-4"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-social">
          <div className="social-links">
            <a href="https://www.instagram.com/eliastudioarq/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="footer-item">
            <ul>
              <li><NavLink to="/">Início</NavLink></li>
              <li><NavLink to="/portfolio">Portfólio</NavLink></li>
              <li><NavLink to="/arquiteto-em-ibirite">Arquiteto em Ibirité</NavLink></li>
            </ul>
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
