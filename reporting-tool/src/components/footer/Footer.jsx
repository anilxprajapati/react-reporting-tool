import React from 'react';

function Footer() {
  return (
    <footer className="footer fixed-bottom text-center p-3 bg-light">
      <div className="container">
        <span className="text-muted">&copy; {new Date().getFullYear()} Reporting tool</span>
      </div>
    </footer>
  );
}

export default Footer;
