  import './App.css';
  import { Routes, Route } from 'react-router-dom';
  import AllCountries from './components/AllCountries/AllCountries';
  import CountryInfo from './components/CountryInfo/CountryInfo';
  import About from './components/About';
  import HomePage from './components/HomePage';
  import { Link } from 'react-router-dom';
  import NotFoundPage from './components/NotFoundPage';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


  function App() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className='header'>
          <div className='title-container'>
            <h5>WorldExplorer - Discover & Share</h5>
            <div className='navbar-container'>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/countries">Countries</a>
              <Link to="/"></Link>
            </div>
          </div>
        </div>
        <div className='container' style={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/countries' element={<AllCountries />} />
            <Route path="/country/:countryName" element={<CountryInfo />} />
            <Route path="/about" element={<About />} /> 
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <footer className="text-center mt-4">
        &copy; Alon {new Date().getFullYear()} - All rights reserved.
        <div>
          <a href="https://www.linkedin.com/in/alon-aizin-06ba9b26a/" target="_blank" rel="noopener noreferrer" className="m-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/alon19971" target="_blank" rel="noopener noreferrer" className="m-2">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </footer>
      </div>
    );
  }
  
  export default App;
