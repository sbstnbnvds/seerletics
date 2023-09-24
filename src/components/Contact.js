import React, { useState, useRef, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/ilust_contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com'
import './Contact.css';

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    company: '',
    budget: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = useCallback((category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }, [formDetails, setFormDetails])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    sendEmail();
  }, [setButtonText, sendEmail]);

  const sendEmail = useCallback(async () => {
    emailjs.sendForm('service_o3h591j', 'template_4r6wy1r', form.current, '37StAMjMMeJUaQW1I');
    setButtonText("Sending...");
  
    try {
      let response = await fetch("http://localhost:3000/#contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
  
      if (response.ok) {
        setFormDetails(formInitialDetails);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setButtonText("Send");
        setTimeout(() => {
          setStatus({ success: true, message: 'Message sent successfully' });
        }, 200); // Delay to allow the button transition to complete before showing the success message
      }, 2000); // Adjust the delay (in milliseconds) as needed
    }
  }, [formDetails, form, setButtonText, setFormDetails, setStatus]);
  
  
  
  

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact us</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email"value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="company" value={formDetails.company} placeholder="Company Name" onChange={(e) => onFormUpdate('company', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <select name="budget" value={formDetails.budget} onChange={(e) => onFormUpdate('budget', e.target.value)}>
                        <option value="" disabled>Select Budget</option>
                        <option value="less than $2500">Less than $2500</option>
                        <option value="$2500 - $5000">$2500 - $5000</option>
                        <option value="$5000 - $10000">$5000 - $10000</option>
                        <option value="more than $10000">More than $10000</option>
                      </select>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="5" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}