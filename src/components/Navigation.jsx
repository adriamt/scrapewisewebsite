import React from 'react';

function Navigation({ lang = false }) {
    return (
        <>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/#features">Features</a>
                </li>
                <li>
                    <a href="/#how-it-works">How It Works</a>
                </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
