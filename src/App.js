
import './App.css';

function App() {
  // This is the main component of the application
  // It serves as the entry point for the React app
  // and contains the main layout and structure
  // of the application.
  const title = "Welcome to my React Weather App";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default App;
