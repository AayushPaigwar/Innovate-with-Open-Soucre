
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// NOTE: Consider moving this to a JSON file.
const contributors = [
  {
    name: "Aayush Paigwar🧑🏻‍💻",
    role: "Project Maintainer",
    github: "https://github.com/vidhi522",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Sahil Banswani",
    role: "Manager",
    github: "https://github.com/sahil-banswani",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Shreyash",
    role: "Contributor",
    github: "https://github.com/Shreyash2403",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Aadam Shaikh",
    role: "Contributor",
    github: "https://github.com/Shreyash2403",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Rahul Pradhan",
    role: "Contributor",
    github: "https://github.com/pradhan3249",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Piyush Bagde",
    role: "Contributor",
    github: "https://github.com/PiyushBagde",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Ashmit Zanzote",
    role: "Contributor",
    github: "https://github.com/HackerX011",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Rahul Pradhan",
    role: "Contributor",
    github: "https://github.com/pradhan3249",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Manthan",
    role: "Contributor",
    github: "https://github.com/manthanwaghmare",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "AKHILESH SIRSIKAR",
    role: "Contributor",
    github: "https://github.com/Akhi7122004",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Sarang Chafekar",
    role: "Contributor",
    github: "https://github.com/Sarang095",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Divya",
    role: "Contributor",
    github: "https://github.com/Divya-sh47git",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Abhijeet Moghe",
    role: "Contributor",
    github: "https://github.com/Abhijeet0605",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Palash",
    role: "Contributor",
    github: "https://github.com/palash2704",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "VedantKatre",
    role: "Contributor",
    github: "https://github.com/vedant5102",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Aviral Pathak",
    role: "Contributor",
    github: "https://github.com/aviral-hub",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Atharva Gawali",
    role: "Contributor",
    github: "https://github.com/atharv2313",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Vidhi Agrawal",
    role: "Contributor",
    github: "https://github.com/vidhi522",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Yashika",
    role: "Contributor",
    github: "https://github.com/Yashikatahaliyani-03",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Dang Huu Thinh",
    role: "Contributor",
    github: "https://github.com/thinh12112001",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Himangi Tripathy",
    role: "Contributor",
    github: "https://github.com/H1mang1",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Bhavesh Negi",
    role: "Contributor",
    github: "https://github.com/bhaveshnegi",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Kavitha Shanmugan",
    role: "Contributor",
    github: "https://github.com/kavithashanmugan",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Shubham Jain",
    role: "Contributor",
    github: "https://github.com/ShubhamJain-23/",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Abhinav Patra",
    role: "Contributor",
    github: "https://github.com/Abhinavpatra",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Deepanshi Gupta",
    role: "Contributor",
    github: "https://github.com/Deepanshi-Gupta",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Shreya Sanjay",
    role: "Contributor",
    github: "https://github.com/shreyyq",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Iswar Kumar Sahu",
    role: "Contributor",
    github: "https://github.com/kumar1397",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
  {
    name: "Zubin Bhaskar",
    role: "Contributor",
    github: "https://github.com/memickeymac03",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },
   {
    name: "Akash Keote",
    role: "Contributor",
    github: "https://github.com/AkashKeote",
    image: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png"
  },



  /*=================ADD YOUR CODE ABOVE THIS================= */
];

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
