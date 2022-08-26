import "./Homepage.scss";
import Typewriter from "typewriter-effect";

export default function Homepage() {
  return (
    <div class="homepage" id="homepage">
      <div class="box">
        <div class="content">
          <img src="assets/ProfessionalPortrait.jpg" alt="" />
          <h2>Jordan Stafford</h2>
          <span>Full-Stack Developer</span>
          <a href="#HireMe">Hire Me</a>
        </div>
      </div>
      <h1>
        <Typewriter
          class="writer"
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Full-Stack Developer")
              .pauseFor(1600)
              .deleteAll()
              .typeString("Front-End Designer")
              .pauseFor(1600)
              .deleteAll()
              .typeString("Lifelong Student")
              .pauseFor(1600)
              .deleteAll()
              .start();
          }}
        />
      </h1>
    </div>
  );
}
