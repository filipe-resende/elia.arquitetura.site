import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

function Home() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <header className="header-area">
        <NavLink to="/home" className="logo-area">
          <Image src="/img/logo.png" alt="Elía Studio Arquitetura"></Image>
        </NavLink>
        <div className="nav-switch" onClick={toggleNavbar}>
          <i className="fa fa-bars"></i>
        </div>
        <div className="phone-number">
          <a href="https://api.whatsapp.com/send/?phone=553173422196&text&type=phone_number&app_absent=0">
            <i
              className="fa fa-whatsapp"
              style={{ fontSize: '22px', color: 'black' }}
            />
          </a>{' '}
          (31) 97342 2196
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
              <NavLink to="/orcamento">Orçamento</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="left-bar">
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
        <div
          className="hero-slider"
          style={{
            backgroundImage: `url(/img/bg.jpg)`
          }}
        >
          <div className="hero-slide-item">
            <div className="slide-inner">
              <div className="slide-content">
                <h2>
                  Arquitetura <br />
                  Acessível
                  <br /> e descomplicada
                </h2>
                <a href="#projects" className="site-btn sb-light">
                  Veja nossos projetos.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right-text">Arquitetura e Interiores</div>
      </section>
      <section className="intro-section pt100 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 intro-text mb-5 mb-lg-0">
              <h2 className="sp-title">
                Somos um <span>espaço</span> de arquitetura criativa
              </h2>
              <p>
                A <strong>Eliá Studio Arquitetura</strong> se dedica a criar
                projetos com foco na melhoria da qualidade de vida através de
                soluções únicas que proporcionam conforto, segurança, bem-estar,
                tudo isso aliado a criatividade, agilidade e assertividade.
                Estamos aqui para tornar realidade o seu sonho de forma que se
                adapte perfeitamente ao seu orçamento. Estamos à disposição para
                auxiliá-lo na concretização do seu projeto.
              </p>
              <NavLink to="/sobre">
                <a href="#" className="site-btn sb-dark">
                  Saiba mais.
                </a>
              </NavLink>
            </div>
            <div className="col-lg-5 pt-4">
              <Image src="/img/intro.png" alt=""></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section spad">
        <div className="container">
          <div className="section-title">
            <h2>Serviços</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <Image src="/img/icon/dark/1.png" alt=""></Image>
                  </div>
                </div>
                <h3>Projeto arquitetônico</h3>
                <p>
                  Realizamos o projeto de elaboração do imóvel para construção.
                  Pode ser <strong>residencial</strong> ou{' '}
                  <strong>comercial</strong>. Nele são representados elementos
                  construtivos, instalações sanitárias, aberturas e volumetria.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <Image src="/img/icon/dark/2.png" alt=""></Image>
                  </div>
                </div>
                <h3>Projeto de interiores</h3>
                <p>
                  Projeto minucioso para a <strong>parte interna</strong>{' '}
                  envolve desenho técnico com informações: acabamentos,
                  decoração, layout, indicação de pontos elétricos, luminotecnia
                  e detalhamento de soluções.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <Image src="/img/icon/dark/3.png" alt=""></Image>
                  </div>
                </div>
                <h3>Consultoria de arquitetura</h3>
                <p>
                  Com <strong>poucas mudanças</strong>, atenderá o resultado!
                  Inclui reorganização de espaço, móveis e mudança de cores.
                  Avaliaremos se a situação é uma consultoria ou um Projeto,
                  dependendo dos itens solicitados.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <Image src="/img/icon/dark/4.png" alt=""></Image>
                  </div>
                </div>
                <h3>Alvará sanitário</h3>
                <p>
                  Elaboramos o projeto arquitetônico de acordo com a{' '}
                  <strong>legislação</strong> RDC e todas as resoluções
                  posteriores, além de garantir que as necessidades, fluxos e
                  acessibilidade sejam atendidas.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <Image src="/img/icon/dark/5.png" alt=""></Image>
                  </div>
                </div>
                <h3>Regularização</h3>
                <p>
                  Alguns projetos precisam ser regularizados junto a prefeitura
                  da cidade. Fazemos a regularização dos nossos projetos (sendo
                  construções do zero ou reforma).{' '}
                  <strong>Dentro do seu orçamento!</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="sb-icon">
                  <div className="sb-img-icon">
                    <Image src="/img/icon/dark/6.png" alt=""></Image>
                  </div>
                </div>
                <h3>Parcelamento do solo</h3>
                <p>
                  Elaboramos os projeto e materiais urbanísticos, R.T e fazemos
                  todo a protocolização dos documentos exigidos&nbsp;
                  <strong>especificamente</strong>&nbsp; para o caso. Aplicável
                  na modalidade modificação de parcelamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section pb50">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h1>Projetos</h1>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/loja`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/capa-loja.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Lojas C</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/escritorio`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/capa-escritorio.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Escritório J</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/area`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/area-laser-capa.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Área de Convívio AD</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/estetica`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/estetica-capa.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Estúdio de Beleza F</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/gourmet`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/gourmet-capa.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Área Gourmet DW</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/cozinha`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/cozinha-capa.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Cozinha FF</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/area`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/area-gourmet-capa.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Area Gourmet FF</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/sacada`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/sacada-capa.jpg"
                        className="w-100 hover-effect"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Sacada FF</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 mb-3 text-center">
                  <NavLink to={`/projetos/sala`}>
                    <div className="card border-0">
                      <img
                        src="/img/projetos/sala-capa.jpg"
                        className="w-100"
                      />
                      <div className="card-body">
                        <h5 className="mb-1">Sala AD</h5>
                        <p className="small font-weight-thin">3 foto(s)</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="cta-section pt100 pb50">
        <div className="cta-image-box"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
              <h2 className="sp-title">
                <span>Faça um orçamento com a gente!</span>
              </h2>
              <p>
                Ficamos felizes em tê-lo por aqui! Compartilhe um pouco sobre o
                que você precisa. É rápido, prometo! A gente quer ouvir a sua
                história e poder tirar os seus planos do papel. Conte com a Eliá
                para promover soluções verdadeiras e funcionais para seu dia a
                dia. Após o preenchimento nossa equipe entrará em contato com um
                orçamento feito especialmente para você.{' '}
              </p>
              <div className="cta-icons">
                <div className="cta-img-icon">
                  <Image src="/img/icon/light/1.png" alt=""></Image>
                </div>
                <div className="cta-img-icon">
                  <Image src="/img/icon/light/2.png" alt=""></Image>
                </div>
                <div className="cta-img-icon">
                  <Image src="/img/icon/color/3.png" alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="milestones-section spad">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-lg-3 col-md-6">
              <div className="milestone">
                <h2>03</h2>
                <p>
                  Anos <br />
                  Experiência
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="milestone">
                <h2>41</h2>
                <p>
                  Projetos <br />
                  Realizados
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="milestone">
                <h2>3k</h2>
                <p>
                  Seguidores <br />
                  Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <div className="footer-social">
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
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-item">
                    <ul>
                      <li>
                        <NavLink to="/">
                          {' '}
                          <a href="#">Início</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/sobre">
                          {' '}
                          <a href="#">Sobre nós</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/orcamento">
                          {' '}
                          <a href="#">Orçamento</a>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-item">
                    <ul>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          Copyright &copy;{' '}
          <script>document.write(new Date().getFullYear());</script> All rights
          reserved. <br />
        </div>
      </footer>
    </div>
  )
}

export default Home
