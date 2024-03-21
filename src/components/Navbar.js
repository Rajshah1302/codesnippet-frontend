import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid d-flex justify-content-center">
        <a href="/" className="btn text-light mx-2">Upload</a>
        <a href="/display" className="btn text-light mx-2">Display</a>
      </div>
    </nav>
  );
}


export default Navbar;
