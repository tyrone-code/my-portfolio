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
            I am a self-taught front-end web developer based in Krugersdorp
            Gauteng. I formally worked as a paralegal before switching careers
            to front-end web development. My goal is looking to become fullstack
            developer and then eventually specialize in backend development.
          </p>
          <p>
            I have created three projects with foundational fundamental html,
            css and javascript which you can see at the project section. The
            current portfolio website you are currently viewing is made with the
            react library.
          </p>
          <p>
            During my free time, I enjoy gaming and watching sports,
            additionally, I love camping and have a deep appreciation for
            nature, often finding joy in hiking through its scenic beauty.
          </p>
          <p>
            This website was crafted with the purpose of showcasing the projects
            and experiences I've been fortunate to be a part of. Currently, I am
            actively seeking new opportunities and connections, so please feel
            free to get in touch with me!
          </p>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default About;
