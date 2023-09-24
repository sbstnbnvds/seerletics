import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logoBlanco.png';
import Telegram from '../assets/img/telegram.svg';
import Nostr from '../assets/img/nostrich.svg';
import Twitter from '../assets/img/twitter.svg';
import Instagram from '../assets/img/instagram.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://t.me/+a3LwYjYwpFMwYjAx" target="_blank"><img src={Telegram} alt="Telegram" /></a>
              <a href="nostr://npub17m4jzw3jqf4k8gw9xy6a4r9rgff5t425qgz2ek06r9vthcmpk9qsd2av7g" target="_blank"><img src={Nostr} alt="Nostr" /></a>
              <a href="https://twitter.com/CN_Design21" target="_blank"><img src={Twitter} alt="Twitter" /></a>
              <a href="https://www.instagram.com/creativenetwork_21" target="_blank"><img src={Instagram} alt="Instagram" /></a>
            </div>
            <p>Creative Network &copy; 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}