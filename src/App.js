import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  const Employees=[{name: "Ashley", position: "software engineer"}]
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
