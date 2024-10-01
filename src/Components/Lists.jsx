
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contributors from '../data/contributors'
// NOTE: Consider moving this to a JSON file.


export default function Lists() {
  return (
    <div className="container-2" id="contributors">
      <div className="main-logo" id='contri'>
        Contributors for {' '}
        <span className='hack'>Innovate with Open Source
        </span>
      </div>
      <hr />
      <div className='contributors-cards people'>
        {
          contributors.map((contributor, index) => (
            <div className="card" key={index}>
              <div className="img-sec">
                <img src={contributor.image} height="150px" width="150px" />
              </div>
              <div className="info">
                <div className="label">{contributor.name}</div>
                <div className="desc">{contributor.role}</div>
                <div className="github">
                  <a href={contributor.github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="hero" />
                  </a>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div >
  )
}
