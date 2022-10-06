import karo from '../karo.jpeg';

export default function About () {
  return (
    <div className="about" id="about"> 
       <h2>Me, Myself and I</h2>
       <div className="flex-container">
        <img className="flex-left" src={karo} alt="karo" /> 
        <div className='flex-right'>
          <p>Hi, my name is Karolina and I am a full stack web developer living in Middle Sackville, Nova Scotia. My passion for a technology has pushed me to pivot from being a corporate coach and explore the depths of software development.
          I have graduated from LightHouse Labs Software Development Programe with the following stack expertise:</p>
            <ul>
              <li>Languages: JavaScript, HTML+CSS, Ruby</li>
              <li>Database: SQL, PostgreSQL, Relational Databases</li>
              <li>Frameworks: React.js</li>
            </ul>
          <p>When not coding you can find me hiking with my family, at the gym or exploring new restaurats in the city.</p>
        </div>
      </div>

    </div>
  )
} 