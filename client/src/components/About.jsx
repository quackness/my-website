import karo from "../karo.jpeg";

export default function About() {
  return (
    <div className="about" id="about">
      <h2>Me, Myself and I</h2>
      <div className="flex-container">
        <img className="flex-left" src={karo} alt="karo" />
        <div className="flex-right">
          <p>
            Hi, my name is Karolina and I am a full stack web developer living
            in Middle Sackville, Nova Scotia. My passion for technology has
            pushed me to pivot from being a corporate coach and explore the
            depths of software development. I have graduated from LightHouse
            Labs Software Development Programe with the following stack
            expertise:
          </p>
          <ul>
            <li>Languages: JavaScript, HTML+CSS, Ruby</li>
            <li>
              Databases and CMS: SQL, PostgreSQL, Relational Databases,
              WordPress
            </li>
            <li>
              Frameworks, libraries and enviroments: React, Node.js, AJAX,
              jQuery, Express, SASS, EJS, JSX, Sinatra
            </li>
            <li>Testing: Mocha, Chai, Cypress, JEST, StoryBook</li>
            <li>Tracking and collaboration: JIRA, Confluence, GitHub, Git</li>
          </ul>
          <p>
          I love software development for its fast-pace and innovative nature. It allows me to work on problems independently as well as leverage the power of team brain strorming and solving problems collobarotively. 
          </p>
          <p>
            When not coding you can find me hiking with my family, at the gym or
            experiementing in the kitchen.
          </p>
        </div>
      </div>
    </div>
  );
}
