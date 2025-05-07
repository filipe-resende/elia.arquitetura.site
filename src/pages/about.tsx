import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'

export default function About() {
  return (
    <div className="about">
      <Navbar />

      <section
        className="page-header-section"
        style={{
          backgroundImage: `url(/img/bg.jpg)`
        }}
      >
        <div className="container">
          <h1 className="header-title">
            Sobre nós<span>.</span>
          </h1>
        </div>
      </section>
      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 intro-text">
              <h1>
                Somos um <span>estúdio</span> de Arquitetura criativo.
              </h1>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    A Eliá Studio Arquitetura se dedica a criar projetos com
                    foco na melhoria da qualidade de vida através de soluções
                    únicas que proporcionam conforto, segurança, bem-estar, tudo
                    isso aliado a criatividade e agilidade. Estamos aqui para
                    tornar realidade o seu sonho de forma que se adapte
                    perfeitamente ao seu orçamento. Estamos à disposição para
                    auxiliá-lo na concretização do seu projeto.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Cada projeto é desenvolvido com qualidade técnica, buscando
                    a excelência em todos os aspectos. Desde o briefing inicial
                    até as plantas técnicas, trabalhamos de forma abrangente.
                    Além disso, oferecemos a flexibilidade de trabalhar
                    presencialmente ou à distância. Temos o compromisso de
                    transformar sonhos em realidade, sempre alinhados com as
                    suas expectativas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-4">
              <Image src="/img/about.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section spad">
        <div className="testimonials-image-box"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
              <h1>
                <span>Depoimentos</span> de clientes
              </h1>
              <div className="qut">“</div>
              <div className="testimonials-slider" id="test-slider">
                <div className="ts-item">
                  <h4>Thais</h4>
                  <p>
                    “ Simplesmente apaixonada por cada detalhe do meu projeto! A
                    elia superou todas as minhas expectativas. Arquiteta
                    impecável! “
                  </p>
                </div>
                <div className="ts-item">
                  <h4>Fainny</h4>
                  <p>
                    “ Eliá, amei o projeto me surpreendeu muito. Nunca imaginei
                    ser como você me mandou, você me deu muita atenção e tirou
                    todas minhas dúvidas, superou minhas expectativas. Super
                    indico vocês. Agora só colocar em prática. “
                  </p>
                </div>
                <div className="ts-item">
                  <h4>Dayse</h4>
                  <p>
                    “ Nossa ficou do jeito que nós queríamos . Mto obrigado! E
                    que Deus abençoe muito sua vida. “
                  </p>
                </div>
                <div className="ts-item">
                  <h4>Daniele</h4>
                  <p>
                    “ Eu nem estou acreditando que meu espaço vai ficar tão
                    lindo assim... Muito obrigada Eliá por vc entrar dentro da
                    minha cabeça e fazer exatamente o que euestava pensando.
                    Nossa, parece tudo tão perfeito que ainda nem acredito que é
                    meu mesmo. Vocês estão de parabéns, sempre nos acompanhando,
                    tirando nossas dúvidas e caminhando junto comigo. Vc foi um
                    presente de Deus em minha vida. “
                  </p>
                </div>
                <div className="ts-item">
                  <h4>Sarah</h4>
                  <p>
                    “ Oi oi Escritório Eliá! Gostaria de agradecer pelo projeto
                    e por cada detalhe pensado. Estávamos precisando de algo
                    atual e ao mesmo tempo sofisticado, e vocês conseguiram
                    entregar tudo e mais umpouco! Com certeza irei indicar
                    vocês! Além de um excelente projeto o atendimento é
                    maravilhoso ... Até o próximo projeto. “
                  </p>
                </div>
                <div className="ts-item">
                  <h4>Andressa</h4>
                  <p>
                    “ Nossa que perfeita minha cozinha. Está exatamente como
                    sonhei... Meu Deus vc fez do jeito que eu tentava descrever
                    para você. Agradeço a Elia pela excelência e competência no
                    trabalho feito. Estou apaixonada e muitoagradecida por cada
                    detalhe e carinho conosco. “
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 promo-text">
              <h1 style={{ textAlign: 'left' }}>
                O primeiro <span>passo</span> para seu projeto!
              </h1>
              <p>
                Seu projeto de arquitetura e interiores mais personalizado,
                funcional e acessível.
              </p>
            </div>
            <div className="col-lg-3 text-lg-right">
              <NavLink to="/orcamento">
                <a href="#" className="site-btn sb-dark mt-4">
                  Orçamento{' '}
                </a>
              </NavLink>
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
