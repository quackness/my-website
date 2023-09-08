import './App.css';
import './Responsivness.css';
import TopNav from './components/TopNav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Table from './components/Table';

function App() {
  return (
    <div>
      <div className='container-fluid'>
        <TopNav />
        <About />
        <Portfolio />
        <Table />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default App;
