export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <div className="portfolio-details">
            <h3>
              <a href="https://toolswap.netlify.app/">
                ToolSwap <i className="icon-link"></i>
              </a>
            </h3>
            <p>
              Web CRUD app for scheduling a neighbourhood tool sharing. The app
              is using React calendar for logged-in users to schedule the
              rental. The logged in user has a full control over his
              reservations, can add items to the databse and manage them. the
              web site has a search bar to search for particular items in
              specific categories and/or groups. Admin section allows to manage
              all the tools, categories and groups. The app has been deployed
              with Heroku and Netlify.
            </p>
            <p>
              <b>Stack:</b> PostgreSQL, Express, React, Node.
            </p>
          </div>

          <div className="embed-responsive embed-responsive-16by9 border border-dark">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/Tk4Sc80ZBsE"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="project">
          <div className="portfolio-details">
            <h3>
              <a href="https://62aba59e40aaed3d07b05eda--polite-platypus-dac92c.netlify.app">
                Scheduler <i className="icon-link"></i>
              </a>
            </h3>
            <p>
              Schedule, edit and delete technical interviews. The calendar
              side-bar updates the amount of remaining spots automatically based
              on the bookings. The app has been deployed with Heroku and Netlify
              as well as thoroughly tested with multiple testing frameworks.
            </p>
            <p>
              <b>Back-end:</b> Express, SQL, Node
            </p>
            <p>
              <b>Front-end:</b> React, HTML + CSS
            </p>
            <p>
              <b>Test:</b> Cypress, Jest, StoryBook
            </p>
          </div>
          <div className="embed-responsive embed-responsive-16by9 border border-dark">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/0F8iJJ1J-OQ"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="project">
          <div className="portfolio-details">
            <h3>
              <a href="https://github.com/quackness/tweeter">
                Tweeter <i className="icon-link"></i>
              </a>
            </h3>
            <p>
              Tweeter is a single-page Twitter clone, it uses Ajax to provide a
              real time update the page with user submitted tweets. The page
              events are handled with jQuery; the design is powered with HTML +
              CSS with an emphasis on mobile responsiveness.
            </p>
          </div>
          <div className="embed-responsive embed-responsive-16by9 border border-dark">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/-VABYbK_jPI"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}