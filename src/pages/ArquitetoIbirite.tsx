import { NavLink } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import SEO from '../components/seo/seo'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

export default function ArquitetoIbirite() {
  return (
    <div>
      <SEO
        title="Arquiteto em Ibirité | Eliá Arquitetura"
        description="Arquiteto em Ibirité MG. Projetos residenciais modernos, acessíveis e personalizados. Elis Araujo Arquiteta atende Ibirité e BH. Solicite orçamento!"
        canonical="/arquiteto-em-ibirite"
      />
      <Navbar />

      <section
        className="page-header-section"
        style={{ backgroundImage: `url(/img/bg.jpg)` }}
      >
        <div className="container">
          <h1 className="header-title">
            Arquiteto em Ibirité<span>.</span>
          </h1>
        </div>
      </section>

      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sp-title">
                Escritório de <span>Arquitetura em Ibirité</span>
              </h2>
              <p>
                A <strong>Eliá Arquitetura</strong> é um escritório especializado
                em projetos residenciais em <strong>Ibirité MG</strong> e região
                de Belo Horizonte. Atendemos clientes que buscam um{' '}
                <strong>arquiteto em Ibirité</strong> com atendimento próximo,
                projetos modernos e custo acessível.
              </p>
              <p>
                Nossa arquiteta, <strong>Elis Araujo</strong>, desenvolve projetos
                personalizados de arquitetura e interiores para casas e
                apartamentos em Ibirité — respeitando o seu estilo de vida e o
                seu orçamento.
              </p>

              <h3>Serviços de Arquitetura em Ibirité</h3>
              <ul className="lp-diff-list" style={{ marginBottom: '32px' }}>
                <li className="lp-diff-item">✔ Projetos residenciais em Ibirité</li>
                <li className="lp-diff-item">✔ Arquitetura de interiores em Ibirité</li>
                <li className="lp-diff-item">✔ Reformas e otimização de espaços</li>
                <li className="lp-diff-item">✔ Acompanhamento de obra em Ibirité e BH</li>
              </ul>

              <h3>Por que escolher nosso escritório em Ibirité?</h3>
              <ul className="lp-diff-list" style={{ marginBottom: '32px' }}>
                <li className="lp-diff-item">✔ Atendimento humanizado e sem pressa</li>
                <li className="lp-diff-item">✔ Custo acessível e transparente</li>
                <li className="lp-diff-item">✔ Projetos modernos e funcionais</li>
                <li className="lp-diff-item">✔ Acompanhamento completo do início ao fim</li>
              </ul>

              <p>
                Solicite seu projeto com um <strong>arquiteto em Ibirité</strong>{' '}
                agora mesmo. Resposta rápida, sem compromisso.
              </p>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn sb-dark"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="col-lg-4 pt-4">
              <img
                src="/img/projetos/gourmet-capa.jpg"
                alt="Projeto de arquitetura residencial em Ibirité MG pela Eliá Arquitetura"
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
                Pronto para seu <span>projeto em Ibirité</span>?
              </h2>
              <p>
                Entre em contato e receba um orçamento personalizado para seu
                projeto de arquitetura em Ibirité.
              </p>
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
            <a href="https://www.facebook.com/eliastudioarq" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="footer-item">
            <ul>
              <li><NavLink to="/">Início</NavLink></li>
              <li><NavLink to="/portfolio">Portfólio</NavLink></li>
              <li><NavLink to="/arquiteta">Arquiteta</NavLink></li>
              <li><NavLink to="/sobre">Sobre nós</NavLink></li>
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
