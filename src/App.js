
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Mobiles from './components/Mobiles';
import SomethingElse from './components/SomethingElse';

function App() {
  return (
   <>
        <Header/>
        <Hero/>
        <br />
        <Highlights/>
        <br />
        <br />
        <br />
        <br /><br /><br />
        <Mobiles/>
        
        <SomethingElse/>
        <Footer />
   </>
  );
}

export default App;
