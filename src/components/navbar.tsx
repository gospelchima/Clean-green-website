import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <span className="logo-mark">CG</span>
          Clean Green
        </div>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#testimonials">Reviews</a>
          <a href="#quote">Contact</a>
        </div>

        <a href="#quote" className="btn btn-primary nav-cta">Get a Quote</a>

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
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#why" onClick={closeMenu}>Why Us</a>
        <a href="#testimonials" onClick={closeMenu}>Reviews</a>
        <a href="#quote" className="btn btn-primary" style={{ width: 'fit-content' }} onClick={closeMenu}>
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;