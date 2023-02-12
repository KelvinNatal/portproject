import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logo">Kelvin Natal</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://linkedin.com/in/kelvin-natal-40ba681a1/"><img src={navIcon1} alt=""/></a>
                <a href="https://www.facebook.com/kelvin.natal.3/"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/kelvinatal/"><img src={navIcon3} alt=""/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
