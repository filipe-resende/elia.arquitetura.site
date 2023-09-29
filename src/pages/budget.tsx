import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton
} from '@mui/material'
import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { enviarMensagem } from '../services/buget-sender'

import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'

import { styled } from '@mui/material/styles'
import { IForms } from '../interfaces/IForm'

export default function Budget() {
  const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `

  const [formData, setFormData] = useState<IForms>({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    interiores: false,
    comercial: false,
    arquitetonico_residencial: false,
    legalizacao: false,
    comprando: false,
    recebendo_chaves: false,
    sem_pressa: false,
    tenho_pressa: false,
    terreno_vazio: false,
    imovel_antigo: false,
    recem_entregue: false,
    habitando: false,
    instagram: false,
    indicacao: false,
    visitei: false,
    outros: false,
    metros_imoveis: '',
    seu_objetivo: '',
    quais_ambientes: '',
    images: []
  })

  const isFormValid =
    formData.nome.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.telefone.trim() !== ''

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: checked
    }))
  }

  const handleRemoveImage = (indexToRemove: number) => {
    setFormData(prevData => ({
      ...prevData,
      images: prevData.images.filter((_, index) => index !== indexToRemove)
    }))
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newImages = Array.from(files)
      setFormData(prevData => ({
        ...prevData,
        images: [...prevData.images, ...newImages]
      }))
    }
  }

  const handleFormSubmit = async () => {
    try {
      await enviarMensagem(formData)
      alert('Mensagem enviada com sucesso!')
    } catch (error) {
      alert('Ocorreu um erro ao enviar a mensagem.')
    }
  }

  return (
    <div className="budget">
      <header className="header-area">
        <NavLink to="/inicio" className="logo-area">
          <Image src="/img/logo.png" alt="" />
        </NavLink>
        <div className="nav-switch">
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
        <nav className="nav-menu">
          <ul>
            <li>
              <NavLink to="/sobre">Sobre nós</NavLink>
            </li>
            <li className="active">
              <NavLink to="/orcamento">Orçamento</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section
        className="page-header-section"
        style={{
          backgroundImage: `url(/img/bg.jpg)`
        }}
      >
        <div className="container">
          <h1 className="header-title">
            Orçamento<p>.</p>
          </h1>
        </div>
      </section>
      <section className="page-section pt100">
        <div className="container pb100">
          <div className="row">
            <div className="section-title pt-5">
              <h1>Faça seu orçamento</h1>
            </div>
            <Container className="budget-container">
              <Row className="budget-form-row">
                <Col className="col-padding" lg={6} md={12}>
                  <TextField
                    label={'Digite seu Nome'}
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                  />
                </Col>
                <Col className="col-padding" lg={6} md={12}>
                  <TextField
                    label={'Digite seu Email'}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="budget-form-row">
                <Col className="col-padding" lg={6} md={12}>
                  <TextField
                    label={'Digite seu Telefone'}
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                  />
                </Col>
                <Col className="col-padding" lg={6} md={12}>
                  <TextField
                    label={'Digite seu Endereço'}
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="budget-options-row">
                <Col className="col-padding" lg={6} md={12}>
                  <h3>{'Gostaria de um orçamento para: '}</h3>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="interiores"
                          checked={formData.interiores}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>{'Projetos de interiores'}</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="comercial"
                          checked={formData.comercial}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>{'Projeto comercial'}</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="arquitetonico_residencial"
                          checked={formData.arquitetonico_residencial}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={
                        <p>
                          {'Residential or commercial architectural projects'}
                        </p>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="legalizacao"
                          checked={formData.legalizacao}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>{'Projeto legal junto à prefeitura'}</p>}
                    />
                  </FormGroup>
                </Col>
                <Col lg={6} md={12} id="no-gutter">
                  <h3>{'Qual é a situação do imóvel'}</h3>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="terreno_vazio"
                          checked={formData.terreno_vazio}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>{'Terreno vazio'}</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="imovel_antigo"
                          checked={formData.imovel_antigo}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>{'Imóvel antigo'}</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="recem_entregue"
                          checked={formData.recem_entregue}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>{'Casa ou apartamento recém entregue'}</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="habitando"
                          checked={formData.habitando}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>{'Já moro no imóvel, mas quero reformar'}</p>}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="budget-options-row">
                <Col className="col-padding" lg={6} md={12}>
                  <h3>Qual a expectativa para iniciar o projeto:</h3>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="comprando"
                          checked={formData.comprando}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Estou comprando o imóvel</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="recebendo_chaves"
                          checked={formData.recebendo_chaves}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Vou receber as chaves</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="sem_pressa"
                          checked={formData.sem_pressa}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Estou sem pressa</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="tenho_pressa"
                          checked={formData.tenho_pressa}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Tenho pressa</p>}
                    />
                  </FormGroup>
                </Col>
                <Col className="col-padding" lg={6} md={12}>
                  <h3>Onde nos conheceu:</h3>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="instagram"
                          checked={formData.instagram}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Pelo instagram</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="indicacao"
                          checked={formData.indicacao}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Indicação</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="visitei"
                          checked={formData.visitei}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Visitei um projeto assinado por vocês</p>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="outros"
                          checked={formData.outros}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={<p>Outros</p>}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="budget-form-row">
                <Col className="col-padding" lg={6} md={12}>
                  <TextField
                    label="Metragem do imóvel ou área do lote?"
                    name="metros_imoveis"
                    value={formData.metros_imoveis}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                  />
                </Col>
                <Col lg={6} md={12}>
                  <TextField
                    className="custom-textfield"
                    label="Para quais ambientes seria o projeto?"
                    name="quais_ambientes"
                    value={formData.quais_ambientes}
                    onChange={handleInputChange}
                    variant="outlined"
                    multiline
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="budget-form-row">
                <Col className="col-padding" lg={12} md={12}>
                  <TextField
                    label="Nos conte mais sobre seu objetivo..."
                    name="seu_objetivo"
                    value={formData.seu_objetivo}
                    onChange={handleInputChange}
                    variant="outlined"
                    multiline
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="budget-form-row">
                <Col className="col-padding" lg={12} md={12}>
                  <Button
                    className="site-btn sb-dark mt-4"
                    style={{
                      width: '100%',
                      display: 'inline-block',
                      fontWeight: '700',
                      border: '4px solid',
                      minWidth: '200px',
                      textAlign: 'center',
                      padding: '19px 0',
                      position: 'relative',
                      backgroundColor: 'transparent',
                      marginRight: '15px',
                      zIndex: 1
                    }}
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    href="#file-upload"
                  >
                    <p>
                      Você tem alguma planta ou imagens de referência para
                      compartilhar? Compartilhe aqui! (.jpeg)
                    </p>
                    <VisuallyHiddenInput
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </Button>
                </Col>
              </Row>
              <Row className="budget-form-row">
                {formData.images.map((image, index) => (
                  <Col key={index} lg={3} md={4} sm={6} xs={12}>
                    <div key={index}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Imagem ${index}`}
                        className="upload-thumbnail"
                      />
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon
                          fontSize="small"
                          onClick={() => handleRemoveImage(index)}
                        />
                      </IconButton>
                    </div>
                  </Col>
                ))}
              </Row>
              <Row className="budget-submit-row">
                <Button
                  className="site-btn sb-dark mt-4"
                  style={{
                    display: 'inline-block',
                    fontWeight: '700',
                    border: '4px solid',
                    minWidth: '200px',
                    textAlign: 'center',
                    padding: '19px 0',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    marginRight: '15px',
                    zIndex: 1
                  }}
                  onClick={handleFormSubmit}
                  color="primary"
                  disabled={!isFormValid}
                >
                  Enviar
                </Button>
              </Row>
            </Container>
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
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
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
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Help Desk</a>
                      </li>
                      <li>
                        <a href="#">Job Aplications</a>
                      </li>
                      <li>
                        <a href="#">Site Map</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-item">
                    <ul>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Newsletter</a>
                      </li>
                      <li>
                        <a href="#">Clients Testimonials</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
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
