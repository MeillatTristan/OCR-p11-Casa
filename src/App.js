import './style.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Page404 from './pages/Page404/Page404';
import LogementSingle from './pages/logementSingle/LogementSingle';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="logements/:id" element={ <LogementSingle /> } />
          <Route path="/*" element={ <Page404 /> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;