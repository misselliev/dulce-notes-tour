import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menubar from './components/Menubar';
import Footer from './components/Footer';
import Routes from './Routes';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Menubar />
                <Footer />
                <Routes />
            </Router>
        </div>
    );
};

export default App;
