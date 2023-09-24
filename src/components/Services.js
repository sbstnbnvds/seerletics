import React from "react";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import design3d from "../assets/img/service_12.png";
import graphicDesign from "../assets/img/service_22.png";
import motionGraphics from "../assets/img/service_32.png";
import videoEdition from "../assets/img/service_42.png";
import socialMedia from "../assets/img/service_52.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import './Services.css';


export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick}>
      <img src={arrow2} alt="Right" />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick}>
      <img src={arrow1} alt="Left" />
    </button>
  );
  
  return (
    <Router> 
      <section className="skill" id="services">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Services</h2>
                          <p>We are a place<br></br>for Creativity and Design</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" customLeftArrow={<CustomLeft />} customRightArrow={<CustomRight />}>
                            <div className="item">
                              <HashLink style={{textDecoration: 'none'}} to='#contact'>
                                <img src={design3d} alt="3D Design" />
                              </HashLink> 
                              <h5>3D Design</h5>
                            </div>
                            <div className="item">
                              <HashLink style={{textDecoration: 'none'}} to='#contact'>
                                <img src={graphicDesign} alt="Graphic Design" />
                              </HashLink> 
                                <h5>Graphic Design</h5>
                            </div>
                            <div className="item">
                              <HashLink style={{textDecoration: 'none'}} to='#contact'>
                                <img src={motionGraphics} alt="Motion Graphics" />
                              </HashLink> 
                              <h5>Motion Graphics</h5>
                            </div>
                            <div className="item">
                              <HashLink style={{textDecoration: 'none'}} to='#contact'>
                                <img src={videoEdition} alt="Video Editing" />
                              </HashLink>
                              <h5>Video Editing</h5>
                            </div>
                            <div className="item">
                              <HashLink style={{textDecoration: 'none'}} to='#contact'>
                                <img src={socialMedia} alt="Social Media Strategy" />
                              </HashLink>
                              <h5>Social Media Strategy</h5>
                            </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </Router> 
  )
}