import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MySkills from '../MySkills/MySkills';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='bg-secondary'>
            
            <Navbar />
            <Header />
            <AboutMe />
            <MySkills />
            <Projects/>
            <ContactMe />
            <Footer/>
        </div>
    );
};

export default Home;