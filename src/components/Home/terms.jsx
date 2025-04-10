import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import TermsDetails from './TermsAndConditions.jsx';

function TermsAndConditions() {
    const [drawer, setDrawer] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={setDrawer.toggle} />
            <Header drawer={drawer} action={setDrawer.toggle} />
            <TermsDetails />
            <Footer />
            <BackToTop className="back-to-top-8" />
        </>
    );
}

export default TermsAndConditions;
