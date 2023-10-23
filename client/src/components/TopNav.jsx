import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

export default function TopNav() {
  return (
    <div className="topnav">
      <div className="nav-text">
       <a href="#contact">Contact</a>
       <a href="/Resume">Resume</a>
       <a href="#portfolio">Portfolio</a>
      <a href="#about">About</a>
      </div>
    </div>
  );
}
