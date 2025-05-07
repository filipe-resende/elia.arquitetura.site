import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './project.css'

const projetos = [
  { capa: 'capa-loja.jpg', rota: 'loja', titulo: 'Lojas' },
  { capa: 'capa-escritorio.jpg', rota: 'escritorio', titulo: 'Escritório' },
  { capa: 'area-lazer-capa.jpg', rota: 'area', titulo: 'Área de Convívio ' },
  {
    capa: 'estetica-capa.jpg',
    rota: 'estetica',
    titulo: 'Estúdio de Beleza'
  },
  { capa: 'gourmet-capa.jpg', rota: 'gourmet', titulo: 'Área Gourmet' },
  { capa: 'cozinha-capa.jpg', rota: 'cozinha', titulo: 'Cozinha' },
  { capa: 'area-gourmet-capa.jpg', rota: 'lazer', titulo: 'Área Gourmet ' },
  { capa: 'sacada-capa.jpg', rota: 'sacada', titulo: 'Sacada ' },
  { capa: 'sala-capa.jpg', rota: 'sala', titulo: 'Sala ' }
]

export default function Project() {
  return (
    <section id="projects" className="projects-section pb50">
      <Container>
        <div className="section-title text-center mb-5">
          <h1 className="display-5">
            <span>Projetos</span>
            <h2 className="text-2xl font-semibold mb-2">
              <p className="text-muted-foreground text-center">
                Alguns dos nossos projetos que transformaram ideias em espaços
                únicos.
              </p>
            </h2>
          </h1>
        </div>

        <div className="masonry-grid">
          {projetos.map((projeto, index) => (
            <NavLink
              key={index}
              to={`/projetos/${projeto.rota}`}
              className="project-card"
            >
              <div className="image-wrapper">
                <img
                  src={`/img/projetos/${projeto.capa}`}
                  alt={projeto.titulo}
                />
                <div className="overlay">
                  <h5>{projeto.titulo}</h5>
                  <p>3 foto(s)</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </Container>
    </section>
  )
}
