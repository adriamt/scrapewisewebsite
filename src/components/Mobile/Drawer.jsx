import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Drawer({ drawer, action, lang }) {
    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');
    const handler = (e, value) => {
        // e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    };
    return (
        <> 
            <>
                <div
                    onClick={(e) => action(e)}
                    className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
                ></div>
                <div className="offcanvas_menu">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div
                                    className={`offcanvas_menu_wrapper ${
                                        drawer ? 'active' : ''
                                    }`}
                                >
                                    <div className="canvas_close">
                                        <a href="#" onClick={(e) => action(e)}>
                                            <i className="fa fa-times"></i>
                                        </a>
                                    </div>
                                    <div className="offcanvas-brand text-center mb-40">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div id="menu" className="text-left ">
                                        <ul className="offcanvas_main_menu">
                                            <li>
                                                <a href="#features">Features</a>
                                            </li>
                                            <li>
                                                <a href="#how-it-works">How It Works</a>
                                            </li>
                                            <li>
                                                <a href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="offcanvas-social">
                                        <ul className="text-center">
                                            <li>
                                                <a href="$">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="$">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="$">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="$">
                                                    <i className="fab fa-dribbble"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-widget-info">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-envelope"></i>{' '}
                                                    support@appie.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-phone"></i> +(642) 342
                                                    762 44
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fal fa-map-marker-alt"></i>{' '}
                                                    442 Belle Terre St Floor 7, San Francisco,
                                                    AV 4206
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Drawer;
