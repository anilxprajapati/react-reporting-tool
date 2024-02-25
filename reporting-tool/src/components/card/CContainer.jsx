import React from 'react'

function CContainer({ children }) {
  return (
    <div className="m-0">
      <div className={`mx-4 pt-4`} style={{width: 'fit-content', minWidth: '75%'}}>
          {children}
      </div>
    </div>
  )
}

export default CContainer