  // import logo from './logo.svg';
  import './App.css';
  // import { Link, Element } from 'react-scroll';
  import NavBar1 from './components/NavBar1';
  import { LandingPage } from './pages/LandingPage';
  import AboutUs from './pages/AboutUs';
  import Vision from './pages/Vision';
  import Departments from './pages/Departments';
  import FAQs from './pages/FAQs';
  import ContactUs from './pages/ContactUs';
import Foot from './components/Footer';

  function App() {
    return (
      <div className="App">
          <NavBar1/>
          <LandingPage/>
          <AboutUs/>
          <Vision/>
          <Departments/>
          {/* <FAQs/>  */}
          <ContactUs/>
      <footer>
        <Foot/>
      </footer>
      </div>
    );
  }

  export default App;
