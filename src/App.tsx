import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Banner from './components/Banner';

function App() {
    return (
        <div className="App">
            <Menubar />
            <Banner bannerImg="https://i.imgur.com/dMVpKDa.jpg" altImg="The 1975 iliwys banner" />
        </div>
    );
}

export default App;
