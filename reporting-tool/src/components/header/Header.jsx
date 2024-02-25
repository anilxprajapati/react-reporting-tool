import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Import Button from 'react-bootstrap'

function Header() {

  return (
    <header className="container-fluid py-1 bg-primary sticky-top">
      <div className="row">
        <div className="col-md-6 col-sm">
          <h2 className='ms-2 text-white'>Reporting tool</h2>
        </div>
        <div className="col-md-6 col-xs d-flex justify-content-end align-items-center">
          <nav className='me-5'>
            {/* Use Button component from react-bootstrap */}
            <Button className='btn-white'>Home</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
