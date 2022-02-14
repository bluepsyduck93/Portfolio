import logo from './logo.svg';
import './App.css';
import AboutMe from "./pages/aboutMe/aboutMe";
import HomeNavBar from "./components/navBars/homeNavBar/homeNavBar";
import Projects from "./pages/projects/projects";
import Resume from "./pages/resume/resume";
import Suki from './pages/suki/suki'

function App() {
  return (
    <div className="App">
        <HomeNavBar />
        <Suki />
        <Projects/>
        <AboutMe/>
        <Resume/>
    </div>
  );
}

export default App;
