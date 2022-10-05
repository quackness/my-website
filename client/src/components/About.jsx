import karo from '../karo.jpeg';

export default function About () {
  return (
    <div className="about" id="about">
       <h2>Me, Myself and I</h2>
       <img src={karo} alt="karo" /> 
        <p>Hi, my name is Karolina and I am a full stack web developer living in Middle Sackville, Nova Scotia. My passion for a technology has pushed me to pivot from being a corporate coach and explore the depths of software development.</p>
        <p>I have graduated from LightHouse Labs Software Development Programe with the following stack expertise:</p>
          <ul>
            Languages: JavaScript, HTML+CSS, Ruby
          </ul>
          <ul>
            Database: SQL, PostgreSQL, Relational Databases
          </ul>
          <ul>
            Frameworks: React.js 
          </ul>
        <p>When not coding you can find me hiking with my family, at the gym or exploring new restaurats in the city.</p>

    </div>
  )
} 