import './App.css';
import MyRoutes from "./routes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <MyRoutes />
        </HashRouter>
    </div>
  );
}

export default App;
