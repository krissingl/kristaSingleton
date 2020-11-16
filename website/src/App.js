import './App.css';
import Title from './components/title.js'
import Contact from './components/contact.js'
import AboutMe from './components/aboutMe.js'
import Portfolio from './components/portfolio.js'
import Resume from './components/resume.js'
import StyleToggle from './components/styleToggle.js'

function App() {
  return (
    <div className="App">
      <StyleToggle />
      <Title />
      <Contact />
      <AboutMe />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
