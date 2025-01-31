import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>842 47th Avenue</p>
          <p>Chicago, IL 12345</p>
          <p>312-555-0123</p>
          <p>info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon to Fri: 11AM - 11PM</p>
          <p>Sat to Sun: 12PM - 03AM</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <span><FontAwesomeIcon icon={faFacebook} />&nbsp;</span>
            <a href="https://facebook.com/littlelemon">Facebook</a>
          </p>
          <p>
            <span><FontAwesomeIcon icon={faInstagram} />&nbsp;</span>
            <a href="https://instagram.com/littlelemon">Instagram</a>
          </p>
          <p>
            <span><FontAwesomeIcon icon={faXTwitter} />&nbsp;</span>
            <a href="https://twitter.com/littlelemon">Twitter</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 - Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
