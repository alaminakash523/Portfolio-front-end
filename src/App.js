import './App.css';
import Header from './components/Header';
import LSideNavBar from './components/LSideNavBar';
import Banner from './components/Banner';
import BannerBottom from './components/BannerBottom';
import AboutUs from './components/AboutUs';
import OurLocation from './components/OurLocation';
import RightMenu from './components/RightMenu';
import ContactUs from './components/ContactUs';
import NoteState from './context/NoteState';
import { BrowserRouter as Router} from 'react-router-dom';
import WorkState from './context/WorkState';
function App() {
  return (
    <Router>
    <>
    <NoteState>
      <WorkState>
      <div className="perspective effect-rotate-left">
        <div className="container">
          <div className="outer-nav--return"></div>
          <div id="viewport" className="l-viewport">
            <div className="l-wrapper">
              <Header/>
              <LSideNavBar/>
              <ul className="l-main-content main-content">
                <Banner/>
                <BannerBottom/>
                <AboutUs/>
                <OurLocation/>
                <ContactUs/>
              </ul>
            </div>
          </div>
        </div>
        <RightMenu/>
      </div>
      </WorkState>
      </NoteState>
    </>
    </Router>
  );
}

export default App;
