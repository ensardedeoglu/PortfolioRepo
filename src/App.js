import './App.css';
import Navbars from './Navbars';
import Iframe from './Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Skills from './Skills';
import About  from './About';
import Project from './Projects';
function App() {
  return (
    <div className="App">
      <Navbars /><br />
      <Home />
      <Skills />
      <About />
      <Project />
      <Iframe />
    </div>
  );
}

export default App;
