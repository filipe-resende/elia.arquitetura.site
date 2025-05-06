import React, { useState } from 'react'
import './WhatsappButton.css'

export function WhatsappButton() {
  const [showTooltip, setShowTooltip] = useState(true)

  const whatsappLink =
    'https://api.whatsapp.com/send/?phone=553173422196&text&type=phone_number&app_absent=0'

  return (
    <div
      className="floating-whatsapp-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-tooltip animate-fade-in-right"
        >
          Clique e fale conosco!
        </a>
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-button"
      >
        <i className="fa fa-whatsapp" />
      </a>
    </div>
  )
}
