import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as freeSolidSvgIcons from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  return (
    <div className="center">
      <div className={"sidebar " + (menuOpen && "active")}>
        <ul>
          <li>
            <a href="#homepage">
              <span className="icon">
                <FontAwesomeIcon icon={freeSolidSvgIcons.faHouse} className="fontIcon" />
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              <span className="icon">
                <FontAwesomeIcon icon={freeSolidSvgIcons.faUserTie} className="fontIcon" />
              </span>
              <span className="title">About</span>
            </a>
          </li>
          <li>
            <a href="#works">
              <span className="icon">
                <FontAwesomeIcon icon={freeSolidSvgIcons.faBriefcase} className="fontIcon" />
              </span>
              <span className="title">Works</span>
            </a>
          </li>
          <li>
            <a href="#ref">
              <span className="icon">
                <FontAwesomeIcon icon={freeSolidSvgIcons.faUsersGear} className="fontIcon" />
              </span>
              <span className="title">References</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="icon">
                <FontAwesomeIcon icon={freeSolidSvgIcons.faPhone} className="fontIcon" />
              </span>
              <span className="title">Contact</span>
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}
