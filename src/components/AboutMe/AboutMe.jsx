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
            <div class="number">
              <h2>
                480<span>+</span>
              </h2>
              <p>Hours</p>
            </div>
          </div>
          <h5>Fill this out</h5>
        </div>
        <div class="card">
          <div class="percent">
            <div class="dot"></div>
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <div class="number">
              <h2>
                25
              </h2>
              <p>CEUs</p>
            </div>
          </div>
          <h5>Fill this out</h5>
        </div>
        <div class="card">
          <div class="percent">
            <div class="dot"></div>
            <svg>
              <circle cx="70px" cy="70px" r="70px"></circle>
              <circle cx="70px" cy="70px" r="70px"></circle>
            </svg>
            <div class="number">
              <h2>
                58
              </h2>
              <p>Credits</p>
            </div>
          </div>
          <h5>Fill this out</h5>
        </div>
      </div>
      <div class="article">
      <h5>Fill this out</h5>
      </div>
    </div>
  );
}
