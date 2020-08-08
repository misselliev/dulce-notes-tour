import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Menubar />
            <Banner BannerImg="https://wallpaperset.com/w/full/0/7/f/32861.jpg" AltImg="The 1975 BW banner" />
            <Footer />
        </div>
    );
};

export default App;
