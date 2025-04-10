import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import PrivacyDetails from './PrivacyDetails.jsx';

function PrivacyPolicy() {
    const [drawer, setDrawer] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={setDrawer.toggle} />
            <Header drawer={drawer} action={setDrawer.toggle} />
            <PrivacyDetails />
            <Footer />
            <BackToTop className="back-to-top-8" />
        </>
    );
}

export default PrivacyPolicy;
