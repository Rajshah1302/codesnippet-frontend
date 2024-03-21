import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex justify-content-center">
        <a href="/" className="btn  mx-2">Upload</a>
        <a href="/display" className="btn  mx-2">Display</a>
      </div>
    </nav>
  );
}

export default Navbar;
