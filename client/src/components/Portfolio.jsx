export default function Portfolio () {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects</h2> 
        <h3><a href="https://toolswap.netlify.app/">ToolSwap <i class="icon-link"></i></a></h3>
        <p>Web CRUD app for scheduling a neighbourhood tool rental. The app is using React calendar for logged-in users to schedule the rental. The logged in user has a full control over his reservations, can add items to the poll and manage them. Admin section allows to manage all the tools, categories and groups.</p>
        <p> Stack: PostgreSQL, Express, React, Node.</p>
        <iframe className="videos" width="660" height="415" src="https://www.youtube.com/embed/Tk4Sc80ZBsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3><a href="https://62aba59e40aaed3d07b05eda--polite-platypus-dac92c.netlify.app">Scheduler <i class="icon-link"></i></a></h3>
        <p>Schedule, edit and delete technical interviews. The app has been thoroughly tested with multiple testing frameworks and an open source tool. </p>
        <p>Back-end: Express, SQL, Node</p>
        <p>Front-end: React, HTML + CSS</p>
        <p>Test: Cypress, Jest, StoryBook</p>
        <iframe className="videos" width="660" height="415" src="https://www.youtube.com/embed/0F8iJJ1J-OQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3><a href="https://github.com/quackness/tweeter">Tweeter <i class="icon-link"></i></a></h3>
        <p>Tweeter is a single-page Twitter clone, it uses Ajax to provide a real time update the page with user submitted tweets. The page events are handled with jQuery; the design is powered with HTML + CSS with an emphasis on mobile responsiveness.</p>
    </div>
  )
}