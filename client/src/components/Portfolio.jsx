export default function Portfolio () {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects</h2> 
        <h3><a href="https://toolswap.netlify.app/">ToolSwap <i class="icon-link"></i></a></h3>
        <p>Web CRUD app for scheduling a neighbourhood tool rental. The app is using React calendar for logged-in users to schedule the rental.</p>
        <p> Stack: PostgreSQL, Express, React, Node.</p>
        <iframe className="videos" width="660" height="415" src="https://www.youtube.com/embed/Tk4Sc80ZBsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>Scheduler</h3>
        <p>Schedule, edit and delete technical interviews.</p>
        <p>Back-end: Express, SQL, Node</p>
        <p>Front-end: React, HTML + CSS</p>
        <p>Test: Cypress, Jest, StoryBook</p>
        <h3>Tweeter</h3>
        <p>Tweeter is a single-page Twitter clone, it uses Ajax to provide a real time update the page with user submitted tweets. The page events are handled with jQuery; the design is powered with HTML + CSS with an emphasis on mobile responsiveness.</p>
    </div>
  )
}