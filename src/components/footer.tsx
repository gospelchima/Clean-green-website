const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="logo-mark">CG</span>
              Clean Green
            </div>
            <p>Professional, eco-conscious cleaning services for homes and offices across Lagos.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#quote">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+2340000000000">+234 000 000 0000</a></li>
              <li><a href="mailto:hello@cleangreen.ng">hello@cleangreen.ng</a></li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Clean Green. All rights reserved.</span>
          <span>Made with care in Lagos.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;