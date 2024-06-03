import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';


export default function Footer() {
  return (
    <footer className="container-2" style={{ backgroundColor: '#202020', color: 'white' }}>
      <div className="additional" id="About">
        <div id="title">Repository Maintainer</div>
        <div className="f-ele1">
          <div id="name"><a href="https://linktr.ee/aayush2711" style={{ color: '#037bff' }}>Aayush Paigwar🧑🏻‍💻</a></div>
        </div>
        <br />
      </div>
      <div className="f-ele2" style={{ marginBottom: '15px' }}>
        <span>Quick Links</span>
        <ul style={{ display: 'flex', }}>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <a href="#contributors">
            <li>Contributor</li>
          </a>
        </ul>
      </div>
      <div className="f-ele3">
        <ul style={{ marginBottom: '15px' }}>
          <span>Contact me</span>
        </ul>
        <section id="lab_social_icon_footer" style={{ paddingTop: "1px" }}>
          <div className="container">
            <div className="text-center center-block">
              <div className="social-media" id="contact">
                <div className="media1">
                  <a href="https://www.linkedin.com/in/aayush-paigwar/" target="_blank" rel="noreferrer">
                    <img src={linkedin} height="42px" width="42px" alt="LinkedIn" />
                  </a>
                </div>
                <div className="media1">
                  <a href="https://www.instagram.com/aayush___27/" target="_blank" rel="noreferrer">
                    <img src={instagram} height="48px" width="48px" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="f-ele4">
        <div id="clg">Department of Artificial Intelligence, GHRCE</div>
        <div id="pp">©2023-24 Jarvis Forum</div>
      </div>
    </footer>
  )
}
