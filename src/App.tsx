import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Menubar />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <h1 className="text-2xl text-blue-700 leading-tight">Tailwind App</h1>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
