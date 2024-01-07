import logo from './images/cine.png';
import './styles/App.css';
import {MyRoutes} from "./routes/Routes";

function App() {
  return (
      <div>
          <header className={"home-headboard"}>
              <h1><img src={logo} className={"home-logo"}/>Películas</h1>
          </header>
          <MyRoutes/>
      </div>
  );
}

export default App;
