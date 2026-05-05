import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import Project from '../components/project/project'
import Experience from '../components/experience/experience'

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=553173422196&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.&type=phone_number&app_absent=0'

const faqs = [
  {
    q: 'Quanto custa um projeto?',
    a: 'Depende do tamanho e da complexidade. Fazemos um orçamento personalizado sem compromisso.'
  },
  {
    q: 'Preciso ter tudo definido antes?',
    a: 'Não. Ajudamos você a organizar suas ideias desde o início, sem precisar chegar com tudo resolvido.'
  },
  {
    q: 'Vocês acompanham a obra?',
    a: 'Sim, podemos orientar e acompanhar a execução conforme a sua necessidade.'
  },
  {
    q: 'O atendimento é rápido?',
    a: 'Sim, respondemos o mais rápido possível pelo WhatsApp e mantemos comunicação clara durante todo o processo.'
  },
  {
    q: 'Atendem apenas Belo Horizonte?',
    a: 'Atendemos BH e região, além de aceitar projetos remotos para outras localidades.'
  }
]

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="App">
      <Navbar />

      {/* ── 1. Hero ──────────────────────────────────────────── */}
      <section className="hero-section">
        <Sidebar />
        <div
          className="hero-slider"
          style={{ backgroundImage: `url(/img/bg.jpg)` }}
        >
          <div className="hero-slide-item">
            <div className="slide-inner">
              <div className="slide-content">
                <p className="hero-eyebrow">
                  Arquitetura pensada para o seu estilo de vida
                </p>
                <h2 className="hero-title">
                  Transforme sua casa em um espaço sofisticado, funcional e
                  feito para viver bem
                </h2>
                <ul className="hero-bullets">
                  <li>
                    ✔ Projetos personalizados que refletem sua identidade
                  </li>
                  <li>
                    ✔ Acompanhamento próximo, com atenção em cada detalhe
                  </li>
                  <li>
                    ✔ Soluções inteligentes que equilibram estética e custo
                  </li>
                  <li>✔ Valorização real do seu imóvel</li>
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-btn sb-light"
                >
                  Solicitar orçamento agora
                </a>
                <p className="hero-friction">
                  Atendimento rápido, sem compromisso e sem pressão
                </p>
                <p className="hero-social-proof">
                  Mais de 60 projetos desenvolvidos com clientes satisfeitos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right-text">Arquitetura e Interiores</div>
      </section>

      {/* ── 2. Leads ─────────────────────────────────────────── */}
      <section className="lp-leads spad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <p className="lp-tag">Para você que...</p>
              <h2 className="lp-leads-pain">
                Está cansado de ver sua casa sem personalidade ou não sabe por
                onde começar uma reforma?
              </h2>
              <p className="lp-leads-solution">
                A Eliá Arquitetura transforma ideias em projetos claros,
                funcionais e viáveis sem complicação.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="lp-usps">
                <div className="lp-usp-item">
                  <div>
                    <strong>Atendimento próximo e humanizado</strong>
                    <p>Você nunca se sentirá perdido no processo</p>
                  </div>
                </div>
                <div className="lp-usp-item">
                  <div>
                    <strong>Portfólio com projetos reais executados</strong>
                    <p>Resultados concretos, não apenas renderizações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Métricas ──────────────────────────────────────── */}
      <Experience />

      {/* ── 4. Projetos ──────────────────────────────────────── */}
      <Project />

      {/* ── 5. Depoimentos ───────────────────────────────────── */}
      <section className="lp-testimonials spad">
        <div className="container">
          <div className="lp-section-title text-center">
            <h2>O que nossos clientes dizem</h2>
          </div>
          <div className="row">
            {[
              {
                text: 'Ficamos impressionados com o cuidado em cada detalhe.',
                name: 'Mariana S.'
              },
              {
                text: 'Conseguiram transformar completamente nosso espaço sem estourar o orçamento.',
                name: 'Carlos R.'
              },
              {
                text: 'Atendimento extremamente paciente e profissional.',
                name: 'Juliana M.'
              },
              {
                text: 'Nos sentimos seguros durante todo o processo.',
                name: 'Felipe T.'
              }
            ].map((t, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="lp-testimonial-card">
                  <p className="lp-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <p className="lp-testimonial-author">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row lp-authority-row mt-4">
            {[
              'Projetos residenciais executados em diferentes perfis',
              'Clientes atendidos em Belo Horizonte e região',
              'Portfólio com soluções modernas e funcionais'
            ].map((badge, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="lp-authority-badge">✔ {badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Benefícios ────────────────────────────────────── */}
      <section className="lp-benefits spad">
        <div className="container">
          <div className="lp-section-title lp-title-light">
            <h2>
              Mais conforto, mais estética, mais{' '}
              <span className="lp-accent">valor</span> para seu imóvel
            </h2>
          </div>
        </div>
      </section>

      {/* ── 7. Diferenciais ──────────────────────────────────── */}
      <section className="lp-diff spad">
        <div className="container">
          <div className="lp-section-title text-center">
            <h2>
              Por que escolher a{' '}
              <span className="lp-accent-dark">Eliá Arquitetura</span>?
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <ul className="lp-diff-list">
                {[
                  'Atendimento paciente e sem pressa',
                  'Explicação clara em todas as etapas',
                  'Projetos adaptados à sua realidade financeira',
                  'Foco total em funcionalidade + estética',
                  'Transparência do início ao fim',
                  'Experiência com projetos residenciais reais',
                  'Suporte durante todo o processo'
                ].map((d, i) => (
                  <li key={i} className="lp-diff-item">
                    ✔ {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="lp-compare-table">
                <div className="lp-compare-header">
                  <div className="lp-compare-col lp-col-elia">
                    Eliá Arquitetura
                  </div>
                  <div className="lp-compare-col lp-col-others">
                    Outros Escritórios
                  </div>
                </div>
                {[
                  ['Atendimento próximo', 'Atendimento impessoal'],
                  ['Projeto adaptado ao orçamento', 'Projetos genéricos'],
                  ['Explicação clara', 'Comunicação confusa'],
                  ['Foco no cliente', 'Foco apenas no design']
                ].map(([elia, others], i) => (
                  <div key={i} className="lp-compare-row">
                    <div className="lp-compare-col lp-col-elia">✔ {elia}</div>
                    <div className="lp-compare-col lp-col-others">
                      ✗ {others}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Como Funciona ─────────────────────────────────── */}
      <section className="lp-how spad">
        <div className="container">
          <div className="lp-section-title lp-title-light text-center">
            <h2>Simples, claro e sem complicação</h2>
          </div>
          <div className="row justify-content-center">
            {[
              {
                n: '01',
                title: 'Entre em contato',
                desc: 'Explique sua ideia em poucos minutos'
              },
              {
                n: '02',
                title: 'Alinhamento inicial',
                desc: 'Receba orientação e alinhamento de expectativas'
              },
              {
                n: '03',
                title: 'Projeto personalizado',
                desc: 'Desenvolvemos seu projeto sob medida'
              },
              {
                n: '04',
                title: 'Acompanhamento claro',
                desc: 'Você acompanha tudo com clareza e segurança'
              },
              {
                n: '05',
                title: 'Inicie com confiança',
                desc: 'Comece sua obra com mais previsibilidade'
              }
            ].map((step, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-6 mb-4">
                <div className="lp-step-card">
                  <div className="lp-step-number">{step.n}</div>
                  <h4 className="lp-step-title">{step.title}</h4>
                  <p className="lp-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Oferta ────────────────────────────────────────── */}
      <section className="lp-offer spad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="sp-title">
                Solicite seu <span>projeto arquitetônico</span>
              </h2>
              <ul className="lp-offer-bullets">
                <li>✔ Projetos residenciais personalizados</li>
                <li>✔ Soluções inteligentes para diferentes orçamentos</li>
                <li>✔ Atendimento próximo e humanizado</li>
                <li>✔ Clareza em todas as etapas</li>
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn sb-solid-dark"
              >
                Falar no WhatsApp agora
              </a>
              <p className="lp-friction-dark">
                Sem compromisso e com resposta rápida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Sobre a Equipe ───────────────────────────────── */}
      <section className="lp-about spad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <Image
                src="/img/intro.png"
                alt="Arq. Elis Araujo"
                className="lp-about-img"
              />
            </div>
            <div className="col-lg-7">
              <p className="lp-tag">Quem está por trás do seu projeto</p>
              <h2 className="sp-title">
                A arquiteta que cuida do seu projeto como se fosse o{' '}
                <span>dela</span>
              </h2>
              <p>
                A Eliá Arquitetura é liderada por{' '}
                <strong>Arq. Elis Araujo</strong>, com foco em criar espaços que
                unem estética, funcionalidade e bem-estar. Cada projeto é
                desenvolvido com atenção aos detalhes, respeitando o estilo de
                vida e o orçamento de cada cliente.
              </p>
              <NavLink to="/sobre">
                <a href="#" className="site-btn sb-dark">
                  Saiba mais.
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Arquétipos ───────────────────────────────────── */}
      <section className="lp-archetypes spad">
        <div className="container">
          <div className="lp-section-title lp-title-light text-center">
            <h2>Para quem nossos projetos são ideais</h2>
          </div>
          <div className="row">
            {[
              {
                emoji: '🏡',
                type: 'Casais planejando seu lar',
                quote: 'Conseguimos finalmente ter uma casa com a nossa cara.'
              },
              {
                emoji: '🔨',
                type: 'Pessoas reformando sem saber por onde começar',
                quote: 'Tivemos direção clara e evitamos muitos erros.'
              },
              {
                emoji: '💼',
                type: 'Clientes que querem valorizar o imóvel',
                quote: 'O investimento valeu muito a pena.'
              }
            ].map((a, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="lp-archetype-card">
                  <div className="lp-archetype-emoji">{a.emoji}</div>
                  <h4 className="lp-archetype-type">{a.type}</h4>
                  <p className="lp-archetype-quote">&ldquo;{a.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ──────────────────────────────────────────── */}
      <section className="lp-faq spad">
        <div className="container">
          <div className="lp-section-title text-center">
            <h2>Dúvidas comuns</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`lp-faq-item${openFaq === i ? ' open' : ''}`}
                >
                  <button
                    className="lp-faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <span className="lp-faq-toggle">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="lp-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. CTA Final ────────────────────────────────────── */}
      <section className="lp-final-cta spad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="lp-final-cta-title">
                Pronto para transformar seu espaço?
              </h2>
              <ul className="lp-final-bullets">
                <li>✔ Projeto personalizado para seu estilo de vida</li>
                <li>✔ Atendimento próximo e sem complicação</li>
                <li>✔ Soluções alinhadas ao seu orçamento</li>
                <li>✔ Mais segurança para sua obra</li>
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn sb-light"
              >
                Solicitar orçamento agora
              </a>
              <p className="lp-final-friction">Sem risco, sem compromisso</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
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
                        <NavLink to="/sobre">Sobre nós</NavLink>
                      </li>
                      <li>
                        <NavLink to="/orcamento">Orçamento</NavLink>
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

export default Home
