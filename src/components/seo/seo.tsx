import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  image?: string
}

const BASE_URL = 'https://eliastudioarq.com.br'
const DEFAULT_IMAGE = `${BASE_URL}/img/bg.jpg`

export default function SEO({ title, description, canonical, image }: SEOProps) {
  const fullTitle = `${title} | Eliá Arquitetura`
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL
  const img = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}
