import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserTie,
  faBriefcase,
  faUsersGear,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div class="center">
      <div class="sidebar">
        <ul>
          <li>
            <a href="#homepage">
              <span class="icon">
                <FontAwesomeIcon icon={faHouse} className="fontIcon" />
              </span>
              <span class="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              <span class="icon">
                <FontAwesomeIcon icon={faUserTie} className="fontIcon" />
              </span>
              <span class="title">About Me</span>
            </a>
          </li>
          <li>
            <a href="#works">
              <span class="icon">
                <FontAwesomeIcon icon={faBriefcase} className="fontIcon" />
              </span>
              <span class="title">Works</span>
            </a>
          </li>
          <li>
            <a href="#ref">
              <span class="icon">
                <FontAwesomeIcon icon={faUsersGear} className="fontIcon" />
              </span>
              <span class="title">References</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span class="icon">
                <FontAwesomeIcon icon={faPhone} className="fontIcon" />
              </span>
              <span class="title">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
