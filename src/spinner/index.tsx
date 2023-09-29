import React from 'react'
import { Spinner, Col } from 'react-bootstrap'
import './style.css'

const SpinnerLoading: React.FC = () => {
  return (
    <Col xs={12}>
      <Spinner animation="border" size="sm" />
    </Col>
  )
}
export default SpinnerLoading
