export default function Portfolio () {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects</h2>
        <h3>ToolSwap</h3>
        <p>Web CRUD app for scheduling a neighbourhood tool rental. The app is using React calendar for logged-in users to schedule the rental.</p>
        <p> Stack: PostgreSQL, Express, React, Node.</p>
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