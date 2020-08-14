import React from 'react';
import Banner from '../components/Banner';
const Home: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="font-bold text-white">You are home</div>
            <Banner BannerImg="https://wallpaperset.com/w/full/0/7/f/32861.jpg" AltImg="The 1975 BW banner" />
        </div>
    );
};

export default Home;
