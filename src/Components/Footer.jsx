export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Repository Maintainer */}
        <div className="footer-section" id="About">
          <h2 id="title">Repository Maintainer</h2>
          <div id="name">
            <a
              href="https://linktr.ee/aayush2711"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Aayush Paigwar 🧑🏻‍💻
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/contributors" className="footer-link">
                Contributor
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Me */}
        <div className="footer-section contact-section">
          <h2>Contact Me</h2>
          <ul className="contact-info">
            <li>
              <a
                href="https://www.linkedin.com/in/aayush-paigwar/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aayush2711"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/aayush27_11"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aayush___27/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Subscription Input */}
        <div className="footer-section contact-section">
          <h2>Subscribe</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      <hr />

      {/* Footer Info */}
      <div className="footer-info">
        <p>Department of Artificial Intelligence, GHRCE</p>
        <p>©2023-24 Jarvis Forum</p>
      </div>

      {/* Background Animation */}
      <div className="background-animation">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </footer>
  );
}
