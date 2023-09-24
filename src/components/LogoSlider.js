import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './LogoSlider.css';

import logo1 from '../assets/img/MyNode_White.svg';
import logo2 from '../assets/img/TBI_White.svg';
import logo3 from '../assets/img/TBC_White.svg';
import logo4 from '../assets/img/Shamory_White.svg';
import logo5 from '../assets/img/Seed Signer_White.svg';
import logo6 from '../assets/img/RoninDojo_White.svg';
import logo7 from '../assets/img/Bitcoin Park_White.svg';

export const LogoSlider = () => {
    return (
        <section className="logo-slider" id="logoslider">
            <Container>
                <Row className="slide-track">
                    <Col size={12} className="slide" >
                        <img src={logo1} alt="MYNODE" />
                    </Col>
                    <Col size={12} className="slide" >
                        <img src={logo2} alt="The Beef Initiative" />
                    </Col>
                    <Col size={12} className="slide" >
                        <img src={logo7} alt="Bitcoin Park" />
                    </Col>
                    <Col size={12} className="slide" >
                        <img src={logo4} alt="SHAmory" />
                    </Col>
                    <Col size={12} className="slide" >
                        <img src={logo5} alt="SeedSigner" />
                    </Col>
                    <Col size={12} className="slide" >
                        <img src={logo6} alt="RoninDojo" />
                    </Col>
                    <Col size={12} className="slide" >
                        <img src={logo3} alt="The Bitcoin Company" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}