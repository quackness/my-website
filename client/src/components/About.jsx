import karo from "../karo.jpeg";

export default function About() {
  return (
    <div className="about">
      <div class>
        <h2 id="about">Me, Myself and I</h2>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img
            height="100%"
            width="100%"
            className="img-fluid border border-dark"
            src={karo}
            alt="karo"
          />
        </div>
        <div className="about-right">
          <p>
            Hi 👋, my name is Karolina and I am a full stack web developer
            living in Middle Sackville, Nova Scotia. My passion for technology
            has pushed me to pivot from being a corporate coach and explore the
            depths of software development. I have studied software development and have the following stack expertise:
          </p>
          <ul>
            <li>
              <b>Languages:</b> JavaScript, PHP, HTML+CSS, Ruby
            </li>
            <li>
              <b>Frameworks, libraries and enviroments:</b> React, Vue, Node.js,
              AJAX, jQuery, Express, SASS, EJS, JSX, Sinatra
            </li>
            <li>
              <b>Databases and CMS:</b> SQL, PostgreSQL, Relational Databases,
              WordPress
            </li>
            <li>
              <b>Testing:</b> Mocha, Chai, Cypress, JEST, Vue Test Utils, StoryBook
            </li>
            <li>
              <b>Tracking and collaboration:</b> Git,Shortcut, Figma, JIRA, Confluence, GitHub, 
            </li>
          </ul>
          <p>
            I love software development for its fast-pace and innovative nature.
            It allows me to work on problems independently as well as leverage
            the power of brain strorming when solving problems collobarotively.
            I have been recognized by my work collegues for strong work ethics
            and comminication skills.
          </p>
          <p>
            When not coding you can find me hiking with my family, at the gym or
            reading Medium.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
