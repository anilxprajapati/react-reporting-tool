import React from 'react'
import { CardBody } from 'react-bootstrap'

function CBody({children, className, style}) {
  return (
      <CardBody className={`col-auto card-body ps-3 d-flex d-grid gap-5 ${className}`}>
        {children}
      </CardBody>
  )
}

export default CBody