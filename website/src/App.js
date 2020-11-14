import './App.css';
import Title from './components/title.js'
import Contact from './components/contact.js'
import AboutMe from './components/aboutMe.js'
import Portfolio from './components/portfolio.js'

function App() {
  return (
    <div className="App">
      <Title />
      <Contact />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
