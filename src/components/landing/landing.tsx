import React, { useState, useEffect } from 'react'
import './landing.css'

export default function Landing() {
  const [visible, setVisible] = useState(true)

  const path = '/img/projetos/'

  const chaveValor = {
    loja: ['area-gourmet1.jpg', 'cozinha-capa.jpg', 'loja1.jpg'],
    escritorio: ['estetica2.jpg']
  }

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('landingShown')
    if (!hasSeen) {
      setVisible(true)
      sessionStorage.setItem('landingShown', 'true')
    }
  }, [])

  const sendToWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=553173422196`
    window.open(url, '_blank')
  }

  if (!visible) return null

  return (
    <section className="landing-orcamento">
      <img></img>
      <button className="orcamento-close" onClick={() => setVisible(false)}>
        ×
      </button>

      <div className="orcamento-content">
        <div className="orcamento-text">
          <div className="orcamento-div-logo">
            <img
              className="orcamento-logo"
              src="/img/logo_oficial.png"
              alt="Logo Eliá Studio Arq"
            />
          </div>
          <h1>Vamos criar algo incrível juntos?</h1>
          <p> Seu sonho merece sair do papel com carinho e personalidade.</p>
          <p>Faça seu orçamento:</p>
          <div className="orcamento-form">
            <button className="orcamento-button" onClick={sendToWhatsApp}>
              Entre em contato no WhatsApp
            </button>
          </div>
        </div>

        <div className="orcamento-masonry">
          <div className="orcamento-masonry-grid">
            {Object.values(chaveValor)
              .flat()
              .map((filename, index) => (
                <img
                  className="orcamento-image"
                  key={index}
                  src={`${path}${filename}`}
                  alt={`Projeto ${index + 1}`}
                />
              ))}
          </div>
          <div className="orcamento-instagram">
            <a
              href="https://www.instagram.com/eliastudioarq"
              target="_blank"
              rel="noopener noreferrer"
              className="orcamento-instagram-button"
            >
              <i className="fa fa-instagram"></i>
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
