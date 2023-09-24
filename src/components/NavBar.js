import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logoBlanco.png';
import Telegram from '../assets/img/telegram.svg';
import Nostr from '../assets/img/nostrich.svg';
import Twitter from '../assets/img/twitter.svg';
import Instagram from '../assets/img/instagram.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const setCollapsedBackground = () => {
        setCollapsed(!collapsed);
        if (!scrolled) {
            setScrolled(true);
        } else {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        }
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" onClick={() => setCollapsedBackground()}>
                        {collapsed ? (<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#64b783">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7bbada">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        )}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#aboutus" className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutus')}>About Us</Nav.Link>
                            <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
                            <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
                            <Nav.Link href="https://market.creativenetworklive.com/" target="_blank" className={activeLink === 'store' ? 'active navbar-link' : 'navbar-link'}>Store</Nav.Link>
                            {/*<Nav.Link href="#pricing" className={activeLink === 'pricing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pricing')}>Pricing</Nav.Link>*/}
                            {/*<Nav.Link as={Link} to="/store">Store</Nav.Link>*/}
                        </Nav>
                        <span className="navbar_text">
                            <div className="social-icon">
                                <a href="https://t.me/+a3LwYjYwpFMwYjAx" target="_blank"><img src={Telegram} alt="Telegram" /></a>
                                <a href="nostr://npub17m4jzw3jqf4k8gw9xy6a4r9rgff5t425qgz2ek06r9vthcmpk9qsd2av7g" target="_blank"><img src={Nostr} alt="Nostr" /></a>
                                <a href="https://twitter.com/CN_Design21" target="_blank"><img src={Twitter} alt="Twitter" /></a>
                                <a href="https://www.instagram.com/creativenetwork_21" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                            </div>
                            <HashLink to='#contact'>
                                <button className="vvd" onClick={() => console.log('contact')}><span>Contact</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}