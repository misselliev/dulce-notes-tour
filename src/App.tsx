import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menubar from './components/Menubar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Routes from './Routes';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Menubar />
                <Banner BannerImg="https://wallpaperset.com/w/full/0/7/f/32861.jpg" AltImg="The 1975 BW banner" />
                <Footer />
                <Routes />
            </Router>
        </div>
    );
};

export default App;
