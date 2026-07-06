import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Overview from './sections/Overview';
import About from './sections/About';
import Work from './sections/Work';
import Life from './sections/Life';
import Contact from './sections/Contact';
import { palettes } from './data';
import './App.css';

const pages = {
  home: Overview,
  about: About,
  work: Work,
  life: Life,
  contact: Contact,
};

function App() {
  const [route, setRoute] = useState('home');

  const navigate = (next) => {
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const palette = palettes[route];
  const rootStyle = {
    '--bg': palette.bg,
    '--panel': palette.panel,
    '--text': palette.text,
    '--muted': palette.muted,
    '--border': palette.border,
    '--sub': palette.sub,
    '--accent': palette.accent,
  };

  const Page = pages[route];

  return (
    <div className="site-root" style={rootStyle}>
      <Nav route={route} onNavigate={navigate} />
      <div className="page-container">
        <Page key={route} onNavigate={navigate} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
