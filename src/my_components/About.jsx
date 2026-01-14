import myPhoto from "../images/picture.jpg";

function About() {
  return (
    <>
      <div className="about-section">
        <div className="profile">
          <img src={myPhoto} alt="App Logo" />
          <div className="icon-links">
            <a
              href="https://www.linkedin.com/in/tyrone-schoeman-973364308/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/tyrone-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:tyronessglaw@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="about-text">
          <h1>Hi i'm Tyrone Schoeman</h1>
          <p>
            I am a self-taught <strong>full-stack web developer</strong> based
            in Krugersdorp, Gauteng, with experience building complete web
            applications from front end to back end. My technical skill set
            includes{" "}
            <strong>
              HTML, CSS, JavaScript, React, Node.js, Express.js, and SQL
              databases
            </strong>
            .
          </p>

          <p>
            I have developed several projects that demonstrate my ability to
            design responsive user interfaces, create RESTful APIs, and manage
            database-driven applications. The portfolio website you are
            currently viewing was built using <strong>React</strong> and
            reflects my focus on clean code, performance, and user-centered
            design.
          </p>

          <p>
            Outside of development, I enjoy gaming and watching sports, as well
            as camping and hiking, where I draw inspiration from nature.
          </p>

          <p>
            This website was created to showcase my work and technical
            experience. I am actively seeking new opportunities and
            collaborations, so feel free to get in touch.
          </p>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default About;
