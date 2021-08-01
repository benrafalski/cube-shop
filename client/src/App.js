import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
