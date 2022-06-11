import React from 'react';
import About from '../Components/Home/About/About';
import Banner from '../Components/Home/Banner/Banner';
import Contact from '../Components/Home/Contact/Contact';
import Portfolio from '../Components/Home/Portfolio/Portfolio';
import Services from '../Components/Home/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;