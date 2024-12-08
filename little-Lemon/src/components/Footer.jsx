import logo from "../assets/logo.png";
import "./footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="footer-content_img" src={logo} alt="" />

        <ul>
          <h2>Contact</h2>
          <li>2395 Maldive Way, Chicago illinois</li>
          <li>(626)-235-5487</li>
          <li>
            <a href="https://example.com/" target="_blank">
              info@littlelemon@.com
            </a>
          </li>
        </ul>

        <ul>
          <h2>Connect</h2>
          <li>
            <a href="https://example.com/" target="_blank">
              facebook
            </a>
          </li>
          <li>
            <a href="https://example.com/" target="_blank">
              Intagram
            </a>
          </li>
          <li>
            <a href="https://example.com/" target="_blank">
              Join Us!
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
