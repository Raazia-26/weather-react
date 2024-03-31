import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
