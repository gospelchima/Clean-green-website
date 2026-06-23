import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={logo} alt="Clean Green Logo" />
            
            </div>
            <p>Professional, eco-conscious cleaning services for homes and offices across Lagos.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="/Cleangreen-Signature-Scope-of-Services.pdf" target="_blank" rel="noopener noreferrer">View our full scope of work</a></li>
              <li><a href="#quote">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+2348086883879">+234 808 688 3879</a></li>
              <li><a href="mailto:cleangreensignature@gmail.com">cleangreensignature@gmail.com</a></li>
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