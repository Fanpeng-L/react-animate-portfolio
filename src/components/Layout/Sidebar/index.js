import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logos from '../../../assets/images/logo-s.png'
import LogoSubtitle from '../../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logos} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo subtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/lifanpeng/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#92D4E0" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Fanpeng-L"
          >
            <FontAwesomeIcon icon={faGithub} color="#92D4E0" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
