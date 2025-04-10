import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import HeroHome from './HeroHome.jsx';
import Features from './Features.jsx';
import Contact from './Contact.jsx';
import HowItWorks from './HowItWorks.jsx';

function Home() {
    const [drawer, setDrawer] = useToggle(false);
    const location = useLocation();

    useEffect(() => {
        console.log(location.hash);
        if (location.hash === '#contact') {
            const element = document.getElementById('contact');
            console.log(element);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (location.hash === '#features') {
            const element = document.getElementById('features');
            console.log(element);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Drawer drawer={drawer} action={setDrawer.toggle} />
            <Header drawer={drawer} action={setDrawer.toggle} />
            <HeroHome />
            <Features />
            <HowItWorks />
            <Contact className="appie-signup-8-area" />
            <Footer />
            <BackToTop className="back-to-top-8" />
        </>
    );
}

export default Home;
