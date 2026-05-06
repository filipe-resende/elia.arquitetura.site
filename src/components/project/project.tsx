import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './project.css'

const projetos = [
  {
    capa: 'projeto-loja-ibirite.webp',
    rota: 'loja',
    titulo: 'Lojas',
    descricao:
      'Ambiente comercial pensado para atrair, acolher e converter. Layout funcional com identidade visual marcante.'
  },
  {
    capa: 'projeto-escritorio-ibirite.webp',
    rota: 'escritorio',
    titulo: 'Escritório',
    descricao:
      'Espaço de trabalho que equilibra produtividade e conforto, com iluminação estratégica e aproveitamento inteligente.'
  },
  {
    capa: 'projeto-area-convivio-ibirite.webp',
    rota: 'area',
    titulo: 'Área de Convívio',
    descricao:
      'Projeto pensado para reunir pessoas. Integração entre ambientes internos e externos com fluidez e personalidade.'
  },
  {
    capa: 'projeto-estetica-beleza-ibirite.webp',
    rota: 'estetica',
    titulo: 'Estúdio de Beleza',
    descricao:
      'Ambiente que transmite cuidado desde a entrada. Design que valoriza a experiência da cliente em cada detalhe.'
  },
  {
    capa: 'projeto-area-gourmet-ibirite.webp',
    rota: 'gourmet',
    titulo: 'Área Gourmet',
    descricao:
      'Espaço gourmet que une praticidade e sofisticação, criado para receber bem e transformar momentos em memórias.'
  },
  {
    capa: 'projeto-cozinha-moderna-ibirite.webp',
    rota: 'cozinha',
    titulo: 'Cozinha',
    descricao:
      'Cozinha funcional e elegante, com soluções de armazenamento inteligentes e acabamentos que encantam o dia a dia.'
  },
  {
    capa: 'projeto-lazer-gourmet-ibirite.webp',
    rota: 'lazer',
    titulo: 'Área Gourmet II',
    descricao:
      'Segunda versão de área gourmet com proposta mais intimista, voltada para o convívio familiar e receber com estilo.'
  },
  {
    capa: 'projeto-sacada-moderna-ibirite.webp',
    rota: 'sacada',
    titulo: 'Sacada',
    descricao:
      'Pequeno espaço transformado em refúgio. Projeto que aproveita cada centímetro para criar uma extensão do lar.'
  },
  {
    capa: 'projeto-sala-estar-ibirite.webp',
    rota: 'sala',
    titulo: 'Sala',
    descricao:
      'Sala de estar com identidade própria — paleta cuidadosa, mobiliário planejado e atmosfera que convida a ficar.'
  }
]

export default function Project() {
  return (
    <section id="projects" className="projects-section pb50">
      <Container>
        <div className="gallery-header text-center">
          <p className="gallery-tag">Nosso trabalho</p>
          <h2 className="gallery-title">Portfólio</h2>
          <p className="gallery-subtitle">
            Projetos que transformaram ideias em espaços únicos.
          </p>
        </div>

        <div className="gallery-grid">
          {projetos.map((projeto, index) => (
            <NavLink
              key={index}
              to={`/projetos/${projeto.rota}`}
              className="gallery-card"
            >
              <div className="gallery-img-wrap">
                <img
                  src={`/img/projetos/${projeto.capa}`}
                  alt={`Projeto de ${projeto.titulo.toLowerCase()} em Ibirité e BH — Eliá Arquitetura`}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-overlay-tag">Ver projeto</span>
                  <h5 className="gallery-overlay-title">{projeto.titulo}</h5>
                  <p className="gallery-overlay-desc">{projeto.descricao}</p>
                  <span className="gallery-overlay-arrow">→</span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </Container>
    </section>
  )
}
