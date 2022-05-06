import './Welcome.scss';
import React from 'react';

function Welcome() {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <p>
          Edit <code>src/Welcome.js</code> and save to reload.
        </p>
        <a
          className="Welcome-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Welcome;
