import { useState } from 'react';
import logo from '../assets/logo.svg';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Clean Green Logo" />
        </div>

        <div className="nav-links">
          <a href="#services">SERVICES</a>
          <a href="#why">ABOUT US</a>
          <a href="#testimonials">REVIEWS</a>
          <a href="#quote">CONTACT</a>
        </div>

        <a href="#quote" className="btn btn-primary nav-cta">GET A QUOTE</a>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={closeMenu}>SERVICES</a>
        <a href="#why" onClick={closeMenu}>ABOUT US</a>
        <a href="#testimonials" onClick={closeMenu}>REVIEWS</a>
        <a href="#quote" className="btn btn-primary" style={{ width: 'fit-content' }} onClick={closeMenu}>
          GET A QUOTE
        </a>
      </div>
    </header>
  );
};

export default Navbar;