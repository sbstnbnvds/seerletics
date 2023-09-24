import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import bannerIlustration from '../assets/img/ilust_banner.png';
import TrackVisibility from 'react-on-screen';
import spaceVideo from '../assets/img/Space1.mp4';
import spaceVideo2 from '../assets/img/Space1.webm';
import spaceVideoImg from '../assets/img/Space1.jpg'
import './Banner.css';

export const Banner = ({ src, isMuted }) => {
    const refVideo = useRef(null);
    useEffect(() => {
        if (!refVideo.current) {
            return;
        }
        if (isMuted) {
            //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
            refVideo.current.defaultMuted = true;
            refVideo.current.muted = true;
        }
        refVideo.current.srcObject = src;
    }, [src]);
    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <div>
                                <video ref={refVideo} autoPlay muted loop playsInline id='video' poster={spaceVideoImg}>
                                    <source src={spaceVideo} type='video/mp4' />
                                    <source src={spaceVideo2} type='video/webm' />
                                </video>
                            </div>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    
                                    <span className="tagline">Welcome to Creative Network</span>
                                    <p>Design<br></br>For<br></br>Everyone</p>
                                    <HashLink style={{textDecoration: 'none'}} to='#contact'>
                                        <button className="sales" onClick={() => console.log('contact')}><span>CONTACT SALES NOW</span></button>
                                    </HashLink>                                                               
                                </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={bannerIlustration} alt="Welcome" />
                                </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>      
    )
}