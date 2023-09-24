import React from "react";
import AboutUsIlustration from "../assets/img/ilust_aboutUs.png";
import { Container, Row, Col } from "react-bootstrap";
import './AboutUs.css';

export const AboutUs = () => {
    return (
        <section className="about-us" id="aboutus">
            <Container>
                <div className="col-12">
                    <div className="about-us-bx">
                        <Row>
                            <h2>About Us</h2>
                            <Col xs={12} md={6}>
                                <p>Creative Network offers marketing and design solutions specifically tailored to the needs of Bitcoiners. Our team of creative professionals specializes in crafting captivating brand experiences that resonate with the Bitcoin community.</p>
                                <p>With a focus on trust and transparency, we deliver a comprehensive range of services to Bitcoin businesses. Our goal is to foster long-term relationships that drive success for Bitcoin companies in the new Sound Money System.</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <img src={AboutUsIlustration} alt="About Us" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}