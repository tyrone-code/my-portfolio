import calculator from "../images/calculator.png";
import noughtsCrosses from "../images/noughts-crosses.png";
import etch from "../images/etch-a-sketch.png";
import rps from "../images/rps.png";
import library from "../images/library.png";
import weatherApp from "../images/weather-app.png"
import messageBoard from  "../images/message-board.png"


import ssg from "../images/ssg-attorneys.png";
import fiduciaryAssociation from "../images/fiduciary-association.png";

function Projects() {
  return (
    <>
      <div>
        <h2>My projects</h2>
        <div className="project-parent">
          <div>
            <a href="https://tyrone-code.github.io/calculator/">
              <p>Calculator</p>
              <img src={calculator} alt="calculator-project" />
            </a>
          </div>
          <div>
            <a href="https://tyrone-code.github.io/tic-tac-toe/">
              <p>Noughts and crosses</p>
              <img src={noughtsCrosses} alt="tic-tac-toe" />
            </a>{" "}
          </div>
          <div>
            <a href="https://tyrone-code.github.io/etch-a-sketch/">
              <p>Etch-a-sketch</p>
              <img src={etch} alt="etch-a-sketch" />
            </a>{" "}
          </div>
          <div>
            <a href="https://tyrone-code.github.io/rock-paper-scissors/">
              <p>Rock paper scissors</p>
              <img src={rps} alt="rock-paper-scissors" />
            </a>{" "}
          </div>
          <div>
            <a href="https://tyrone-code.github.io/library/">
              <p>Library</p>
              <img src={library} alt="library" />
            </a>{" "}
          </div>
          <div>
            <a href="https://tyrone-code.github.io/weather-app/">
              <p>Weather app</p>
              <img src={weatherApp} alt="weather-app" />
            </a>{" "}
          </div>
          <div>
            <a href="https://minimessageboard-production-7550.up.railway.app/">
              <p>Message board</p>
              <img src={messageBoard} alt="message-board" />
            </a>{" "}
          </div>
        </div>
        <h2>My websites</h2>
        <div class="my-websites-parent">
          <div>
            <a href="https://ssgattorneys.co.za/">
              <p>SSG Attorneys</p>
              <img src={ssg} alt="ssg-attorneys" />
            </a>{" "}
          </div>
          <div>
            <a href="https://fiduciaryassociation.netlify.app/">
              <p>Fiduciary Association</p>
              <img src={fiduciaryAssociation} alt="fiduciary-association" />
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
