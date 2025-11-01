import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Multi-Stage Docker</h1>
        <p>
          Dockerized React application using multi-stage builds!
        </p>
        <div className="info-box">
          <h2>Multi-Stage Build Architecture</h2>
          <ul>
            <li><strong>Stage 1:</strong> Node.js - Build the React app</li>
            <li><strong>Stage 2:</strong> Nginx - Serve static files</li>
          </ul>
        </div>
        <div className="features">
          <h3>Benefits:</h3>
          <ul>
            <li>✅ Smaller image size</li>
            <li>✅ Production optimized</li>
            <li>✅ Enhanced security</li>
            <li>✅ Faster deployments</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
