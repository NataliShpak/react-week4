import './App.css';
import WeatherSearch from "./WeatherSearch";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1>
        React weather application
      </h1>
      <button className='btn btn-primary'>Button</button>
       <WeatherSearch />
     
       <footer>
        <a href='https://github.com/NataliShpak/react-weather-application' target='_blank' rel="noreferrer">Open-source code on GitHub</a> by Nataliia Shpak
      </footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
