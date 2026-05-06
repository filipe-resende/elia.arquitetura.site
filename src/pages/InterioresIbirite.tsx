import { NavLink } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import SEO from '../components/seo/seo'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

export default function InterioresIbirite() {
  return (
    <div>
      <SEO
        title="Arquitetura de Interiores em Ibirité | Eliá"
        description="Arquitetura de interiores em Ibirité MG. Projetos de cozinha, sala, quarto e mais com a arquiteta Elis Araujo. Atendimento em Ibirité e BH. Orçamento grátis!"
        canonical="/arquitetura-interiores-ibirite"
      />
      <Navbar />

      <section
        className="page-header-section"
        style={{ backgroundImage: `url(/img/bg.jpg)` }}
      >
        <div className="container">
          <h1 className="header-title">
            Interiores em Ibirité<span>.</span>
          </h1>
        </div>
      </section>

      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sp-title">
                Arquitetura de <span>Interiores em Ibirité</span>
              </h2>
              <p>
                A <strong>Eliá Arquitetura</strong> desenvolve projetos de{' '}
                <strong>arquitetura de interiores em Ibirité MG</strong> com foco
                em funcionalidade, estética e custo acessível. Transformamos
                cozinhas, salas, quartos e áreas de lazer em espaços únicos que
                refletem sua personalidade.
              </p>

              <h3>Ambientes que projetamos em Ibirité</h3>
              <ul className="lp-diff-list" style={{ marginBottom: '32px' }}>
                {[
                  'Projeto de cozinha moderna em Ibirité',
                  'Projeto de sala de estar e jantar em Ibirité',
                  'Projeto de quarto e suíte em Ibirité',
                  'Área gourmet e sacada em Ibirité',
                  'Projeto de home office em Ibirité',
                  'Reforma de apartamento em Ibirité e BH'
                ].map((item, i) => (
                  <li key={i} className="lp-diff-item">✔ {item}</li>
                ))}
              </ul>

              <p>
                Cada projeto de <strong>interiores em Ibirité</strong> começa com
                uma conversa — entendemos seu estilo, suas necessidades e seu
                orçamento antes de qualquer linha no papel.
              </p>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn sb-dark"
                style={{ marginTop: '16px' }}
              >
                Solicitar orçamento de interiores
              </a>
            </div>
            <div className="col-lg-4 pt-4">
              <img
                src="/img/projetos/cozinha-capa.jpg"
                alt="Projeto de cozinha moderna em Ibirité MG pela Eliá Arquitetura"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
                loading="lazy"
              />
              <img
                src="/img/projetos/sala-capa.jpg"
                alt="Projeto de sala de estar em Ibirité MG pela Eliá Arquitetura"
                style={{ width: '100%', borderRadius: '12px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 promo-text">
              <h2 style={{ textAlign: 'left', color: '#fff' }}>
                Transforme seus <span>interiores em Ibirité</span>
              </h2>
              <p>
                Entre em contato e solicite seu projeto de interiores sem
                compromisso.
              </p>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn sb-light mt-4"
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
