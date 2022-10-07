export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <div className="portfolio-details">
            <h3>
              <a href="https://toolswap.netlify.app/">
                ToolSwap <i class="icon-link"></i>
              </a>
            </h3>
            <p>
              Web CRUD app for scheduling a neighbourhood tool rental. The app
              is using React calendar for logged-in users to schedule the
              rental. The logged in user has a full control over his
              reservations, can add items to the poll and manage them. Admin
              section allows to manage all the tools, categories and groups.
            </p>
            <p>
              {" "}
              <b>Stack:</b> PostgreSQL, Express, React, Node.
            </p>
          </div>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/Tk4Sc80ZBsE"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="project">
          <div className="portfolio-details">
            <h3>
              <a href="https://62aba59e40aaed3d07b05eda--polite-platypus-dac92c.netlify.app">
                Scheduler <i class="icon-link"></i>
              </a>
            </h3>
            <p>
              Schedule, edit and delete technical interviews. The app has been
              thoroughly tested with multiple testing frameworks and an open
              source tool.{" "}
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
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/0F8iJJ1J-OQ"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* <div className="portolio-video ratio ratio-16x9">
        <iframe className="videos" width="660" height="415" src="https://www.youtube.com/embed/Tk4Sc80ZBsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
      </div>
      
      <h3>
        <a href="https://github.com/quackness/tweeter">
          Tweeter <i class="icon-link"></i>
        </a>
      </h3>
      <p>
        Tweeter is a single-page Twitter clone, it uses Ajax to provide a real
        time update the page with user submitted tweets. The page events are
        handled with jQuery; the design is powered with HTML + CSS with an
        emphasis on mobile responsiveness.
      </p>
      <iframe
        className="videos"
        width="660"
        height="415"
        src="https://www.youtube.com/embed/-VABYbK_jPI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
