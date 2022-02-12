import logo from './logo.svg';
import './App.css';
import AboutMe from "./pages/aboutMe/aboutMe";
import Projects from "./pages/projects/projects";
import Resume from "./pages/resume/resume";

function App() {
  return (
    <div className="App">
        <Projects/>
        <AboutMe/>
        <Resume/>
    </div>
  );
}

export default App;
