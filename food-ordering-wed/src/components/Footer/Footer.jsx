import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

//import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Sunday</span>
                <p>10:00am - 10:00pm</p>  
              </ListGroupItem>    
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: 110 Thai thinh Trung liet Dong Da Ha Noi</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0397825923</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: domanhcuong03072003@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <a href="https://www.facebook.com/muhib160"  target="_blank" rel="noopener noreferrer">
                  <i class="ri-facebook-line"></i>
                </a>{" "}
              </span>

              <span>
                <a href="https://github.com/muhib160" target="_blank" rel="noopener noreferrer">
                  <i class="ri-github-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href=" https://www.youtube.com/c/MuhibsTechDiary" target="_blank" rel="noopener noreferrer">
                  <i class="ri-youtube-line"></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a href=" https://www.linkedin.com/in/muhib160/" target="_blank" rel="noopener noreferrer">
                  <i class="ri-linkedin-line"></i>
                </a>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
