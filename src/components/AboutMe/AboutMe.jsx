import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div class="aboutMe" id="aboutMe">
      <div class="container">
        <div class="card">
          <div class="percent">
            <div class="dot"></div>
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle cx="70px" cy="70px" r="70px"></circle>
            </svg>
          </div>
        </div>
        <div class="card">
          <div class="percent">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle cx="70px" cy="70px" r="70px"></circle>
            </svg>
          </div>
        </div>
        <div class="card">
          <div class="percent">
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle cx="70px" cy="70px" r="70px"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
