import './App.css';
import './Responsivness.css';
import TopNav from './components/TopNav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <div className='container-fluid'>
      <TopNav />
      <About />
      <Portfolio />
      <Contact />
    </div>
    <Footer />
    </div>
  );
}
export default App;
