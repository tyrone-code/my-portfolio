import responsive from "../images/responsive.png";

function Skills() {
  return (
    <>
      <div>
        <h2>My skills</h2>
        <div className="skills-parent">
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </div>
          <div>
            <img src={responsive} className="responsive" />
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Skills;
