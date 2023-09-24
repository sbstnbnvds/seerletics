import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Pricing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Pricing = () => {
    return ( 
        <Router>
            <div className="pricing" id="pricing">
                <Container>
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h2 className="display-4">Pricing</h2>
                        <p className="lead">Marketing and Design Plans for your projects</p>
                    </div>
                    <div className="card-deck mb-3 text-center">
                        <Row>
                            <Col sm={12} md={6} lg={3}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="my-0">The Kickstart Package</h4>
                                    </div>
                                    <div className="card-body">
                                        {/*<h1>$3,000 <small>/ mo</small></h1>*/}
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>Monthly social media audit</li>
                                            <li>2 social media posts per week</li>
                                            <li>Basic graphic design services</li>
                                            <li>1 social media campaign per month</li>
                                        </ul>
                                        <HashLink to='#contact'>
                                            <button type="button" >Get Invoiced & Schedule a Meeting</button>
                                        </HashLink>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="my-0">The Success Blueprint</h4>
                                    </div>
                                    <div className="card-body">
                                        {/*<h1>$6,000 <small>/ mo</small></h1>*/}
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>4 social media posts per week</li>
                                            <li>2 Video per month</li>
                                            <li>Professional graphic design services</li>
                                            <li>1 3D model or prototype design per month</li>
                                            <li>2 social media campaigns per month</li>
                                        </ul>
                                        <HashLink to='#contact'>
                                            <button type="button" >Get Invoiced & Schedule a Meeting</button>
                                        </HashLink>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="my-0">The Growth Accelerator</h4>
                                    </div>
                                    <div className="card-body">
                                        {/*<h1>$9,000 <small>/ mo</small></h1>*/}
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>6 social media posts per week</li>
                                            <li>4 Video per month</li>
                                            <li>3 social media campaigns per month</li>
                                            <li>2 3D model or prototype design per month</li>
                                            <li>Monthly Analytics report</li>
                                            <li>Email marketing and newsletter design services</li>
                                        </ul>
                                        <HashLink to='#contact'>
                                            <button type="button" >Get Invoiced & Schedule a Meeting</button>
                                        </HashLink>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="my-0">The Business Life Plan</h4>
                                    </div>
                                    <div className="card-body">
                                        {/*<h1>$15,000 <small>/ mo</small></h1>*/}
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>Dedicated social media strategist</li>
                                            <li>Weekly report of all analytics</li>
                                            <li>2 3D models or prototype designs per week</li>
                                            <li>50 hours of design for any other creative or design needs</li>
                                            <li>Access to a dedicated team of skilled designers</li>
                                        </ul>
                                        <HashLink to='#contact'>
                                            <button type="button">Get a quote & schedule a meeting</button>
                                        </HashLink>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </Router> 
    )
}