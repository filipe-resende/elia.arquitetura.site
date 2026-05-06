import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import SEO from '../components/seo/seo'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

export default function Arquiteta() {
  return (
    <div className="arquiteta-page">
      <SEO
        title="Arquiteto em Ibirité e BH | Residencial Moderno"
        description="Conheça a Arq. Elis Araujo — arquiteta em BH e Ibirité com foco em projetos residenciais personalizados, acessíveis e feitos para o seu estilo de vida."
        canonical="/arquiteta"
      />
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="page-header-section"
        style={{ backgroundImage: `url(/img/bg.jpg)` }}
      >
        <Navbar />
        <Sidebar />
        <div className="container">
          <h1 className="header-title">
            Arquiteta<span>.</span>
          </h1>
        </div>
      </section>

      {/* ── História ─────────────────────────────────────────── */}
      <section className="arq-story spad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <Image
                src="/img/intro.png"
                alt="Arq. Elis Araujo"
                className="arq-photo"
              />
            </div>
            <div className="col-lg-7">
              <p className="arq-tag">
                Conheça a história por trás dos projetos
              </p>
              <h1>
                Arq. <span>Elis Araujo</span>
              </h1>
              <p>
                A arquitetura sempre foi mais do que uma profissão para Elis —
                foi uma forma de enxergar o mundo. Desde cedo, ela percebeu que
                os espaços onde vivemos moldam a forma como nos sentimos, como
                nos relacionamos e como nos expressamos.
              </p>
              <p>
                Formada em Arquitetura e Urbanismo, Elis fundou a{' '}
                <strong>Eliá Arquitetura</strong> com um propósito claro: tornar
                a arquitetura de qualidade acessível a quem realmente precisa —
                sem abrir mão da personalidade, da funcionalidade e do cuidado
                em cada detalhe.
              </p>
              <p>
                Ao longo de anos de atuação em Belo Horizonte e região, ela
                desenvolveu um método de trabalho que coloca o cliente no centro
                de tudo: escuta ativa, comunicação clara e projetos que
                respeitam tanto o sonho quanto o orçamento de cada pessoa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── O que me move ────────────────────────────────────── */}
      <section className="arq-values spad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="arq-tag">Filosofia de trabalho</p>
              <h2 className="sp-title">
                O que me <span>move</span>
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            {[
              {
                title: 'Escuta antes de projetar',
                desc: 'Cada cliente tem uma história única. Antes de qualquer linha no papel, preciso entender quem você é, como você vive e o que você sonha.'
              },
              {
                title: 'Clareza em cada etapa',
                desc: 'Arquitetura pode parecer complexa, mas não precisa ser confusa. Me comprometo a explicar cada decisão de forma simples e transparente.'
              },
              {
                title: 'Estética com propósito',
                desc: 'Um espaço bonito que não funciona para quem vive nele não é um bom projeto. Beleza e praticidade andam sempre juntas no meu trabalho.'
              },
              {
                title: 'Orçamento como realidade',
                desc: 'Projeto dentro do orçamento não é limitação — é respeito. Encontrar soluções inteligentes dentro das possibilidades reais de cada cliente é parte do meu ofício.'
              },
              {
                title: 'Presença até o fim',
                desc: 'Não entrego o projeto e desapareço. Estou disponível para acompanhar, orientar e garantir que o resultado final seja o que você imaginou.'
              },
              {
                title: 'Valorização do seu imóvel',
                desc: 'Um bom projeto de arquitetura é também um investimento. Cada decisão é pensada para agregar valor real ao seu espaço a longo prazo.'
              }
            ].map((v, i) => (
              <div key={i} className="col-md-6 col-lg-4 mb-4">
                <div className="arq-value-card">
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Frase de impacto ─────────────────────────────────── */}
      <section className="arq-quote spad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <blockquote className="arq-blockquote">
                &ldquo;Acredito que todo espaço tem o potencial de se tornar
                extraordinário quando é pensado com cuidado, escuta e
                propósito.&rdquo;
              </blockquote>
              <cite className="arq-cite">— Arq. Elis Araujo</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="promo-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 promo-text">
              <h1 style={{ textAlign: 'left' }}>
                Vamos criar algo <span>incrível</span> juntos?
              </h1>
              <p>
                Entre em contato e descubra como a Eliá Arquitetura pode
                transformar o seu espaço.
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
