
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // This is the main component of the application
  // It serves as the entry point for the React app
  // and contains the main layout and structure
  // of the application.
  

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
