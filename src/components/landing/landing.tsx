import React, { useState, useEffect } from 'react'
import './landing.css'

export default function Landing() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [visible, setVisible] = useState(true)

  const path = '/img/projetos/'

  const chaveValor = {
    loja: ['capa-loja.jpg', 'estetica-capa.jpg'],
    escritorio: ['capa-escritorio.jpg']
  }

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('landingShown')
    if (!hasSeen) {
      setVisible(true)
      sessionStorage.setItem('landingShown', 'true')
    }
  }, [])

  const sendToWhatsApp = () => {
    const formattedPhone = phone.replace(/\D/g, '')
    const message = `Olá! Me chamo ${name} e gostaria de solicitar um orçamento.`
    const url = `https://api.whatsapp.com/send?phone=553173422196&text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  if (!visible) return null

  return (
    <section className="landing-orcamento">
      <button className="orcamento-close" onClick={() => setVisible(false)}>
        ×
      </button>

      <div className="orcamento-content">
        <div className="orcamento-text">
          <h1>
            Vamos criar algo incrível juntos? Seu sonho merece sair do papel com
            carinho e personalidade.
          </h1>
          <p>
            Solicite seu orçamento personalizado agora mesmo e receba
            atendimento pelo WhatsApp.
          </p>

          <div className="orcamento-form">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Seu telefone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <button
              className="orcamento-button"
              onClick={sendToWhatsApp}
              disabled={!name || !phone}
            >
              Enviar para WhatsApp
            </button>
          </div>
        </div>

        <div className="orcamento-masonry">
          {Object.values(chaveValor)
            .flat()
            .map((filename, index) => (
              <img
                key={index}
                src={`${path}${filename}`}
                alt={`Projeto ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
