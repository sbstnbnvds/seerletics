import React from 'react';
import { Container, Nav, Row, Col, Tab, TabContainer, TabContent } from "react-bootstrap";
import { PortfolioImages } from "./PortfolioImages";

import portfImg1 from "../assets/img/GrassrootsBitcoin.png";
import portfImg2 from "../assets/img/MYNODE_1.png";
import portfImg3 from "../assets/img/TBC_1.png";
import portfImg4 from "../assets/img/NEMS_23.png";
import portfImg5 from "../assets/img/MYNODE_2.png";
import portfImg6 from "../assets/img/TBC_2.png";

import portfImg7 from "../assets/img/RCB_November.png";
import portfImg8 from "../assets/img/RoninDojo_1.png";
import portfImg9 from "../assets/img/Tennessee_BI_1.png";
import portfImg10 from "../assets/img/RCB_May.png";
import portfImg11 from "../assets/img/RoninDojo_2.png";
import portfImg12 from "../assets/img/TBI_Cattleman.png";

import gif1 from '../assets/img/Exchange_2.gif';
import gif2 from '../assets/img/RoninDojo_GIF_1.gif';
import gif3 from '../assets/img/webgif_3.gif';
import gif4 from '../assets/img/Pokemon_2.gif';
import gif5 from '../assets/img/RoninDojo_GIF_2.gif';
import gif6 from '../assets/img/webgif_2.gif';

import design3D_1 from '../assets/img/SHAmory_1.png';
import design3D_2 from '../assets/img/Bitcoin_Skull_1.png';
import design3D_3 from '../assets/img/Cyber_Hornet_1.png';
import design3D_4 from '../assets/img/SHAmory_2.png';
import design3D_5 from '../assets/img/Bitcoin_Skull_2.png';
import design3D_6 from '../assets/img/Cyber_Hornet_2.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Portfolio.css';

export const Portfolio = () => {
    
    const portfolios1 = [
        {
            title: "Bitcoin Park",
            description: "Poster",
            imgUrl: portfImg1,
        },
        {
            title: "MYNODE",
            description: "Social Media",
            imgUrl: portfImg2,
        },
        {
            title: "The Bitcoin Company",
            description: "Social Media",
            imgUrl: portfImg3,
        },
        {
            title: "Bitcoin Park",
            description: "Poster",
            imgUrl: portfImg4,
        },
        {
            title: "MYNODE",
            description: "Social Media",
            imgUrl: portfImg5,
        },
        {
            title: "The Bitcoin Company",
            description: "Social Media",
            imgUrl: portfImg6,
        },
    ];
    const portfolios2 = [
        {
            title: "Rocket City Bitcoin",
            description: "Poster",
            imgUrl: portfImg7,
        },
        {
            title: "RoninDojo",
            description: "Booth",
            imgUrl: portfImg8,
        },
        {
            title: "The Beef Initiative",
            description: "Poster",
            imgUrl: portfImg9,
        },
        {
            title: "Rocket City Bitcoin",
            description: "Poster",
            imgUrl: portfImg10,
        },
        {
            title: "RoninDojo",
            description: "Merch",
            imgUrl: portfImg11,
        },
        {
            title: "The Beef Initiative",
            description: "Poster",
            imgUrl: portfImg12,
        },
    ];
    const portfolios3 = [
        {
            title: "The Bitcoin Company",
            description: "Motion Graphic",
            imgUrl: gif1,
        },
        {
            title: "RoninDojo",
            description: "Video",
            imgUrl: gif2,
        },
        {
            title: "MYNODE",
            description: "Motion Graphic",
            imgUrl: gif3,
        },
        {
            title: "The Bitcoin Company",
            description: "Pokemon Battle",
            imgUrl: gif4,
        },
        {
            title: "RoninDojo",
            description: "Logo Animation",
            imgUrl: gif5,
        },
        {
            title: "MYNODE",
            description: "Getting Started",
            imgUrl: gif6,
        },
    ];
    const portfolios4 = [
        {
            title: "SHAmory",
            description: "3D Design",
            imgUrl: design3D_1,
        },
        {
            title: "Satoshi Skull",
            description: "3D Design",
            imgUrl: design3D_2,
        },
        {
            title: "CyberHornet",
            description: "3D Design",
            imgUrl: design3D_3,
        },
        {
            title: "SHAmory",
            description: "3D Design",
            imgUrl: design3D_4,
        },
        {
            title: "Satoshi Skull",
            description: "3D Design",
            imgUrl: design3D_5,
        },
        {
            title: "CyberHornet",
            description: "3D Design",
            imgUrl: design3D_6,
        },
    ];
    return (
        <section className="portfolio" id="portfolio">
            <Container>
                <Row>
                    <Col size={12} >
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Portfolio</h2>
                                {/* <p>Some examples of what<br></br>we are able to make</p> */}
                                <TabContainer id="portfolio-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Graphics</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Design</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Animations</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">3D</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <TabContent id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    portfolios1.map((portfolio, index) => {
                                                        return (
                                                            <PortfolioImages
                                                                key={index}
                                                                {...portfolio}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                {
                                                    portfolios2.map((portfolio, index) => {
                                                        return (
                                                            <PortfolioImages
                                                                key={index}
                                                                {...portfolio}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                {
                                                    portfolios3.map((portfolio, index) => {
                                                        return (
                                                            <PortfolioImages
                                                                key={index}
                                                                {...portfolio}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <Row>
                                                {
                                                    portfolios4.map((portfolio, index) => {
                                                        return (
                                                            <PortfolioImages
                                                                key={index}
                                                                {...portfolio}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </TabContent>
                                </TabContainer>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}