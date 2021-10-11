import React from "react";
import { ListGroup, Row, Col, Nav } from "react-bootstrap";

const Footer = (props) => {
  return (
    <>
      <Row>
        <hr />
        <Col>(c) Jess LaFrank, 2021</Col>
        <Col>
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://www.boredapi.com/" target="_blank">
                Bored API
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/jlafrank1" target="_blank">
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/jesslafrank/"
                target="_blank"
              >
                LinkedIn
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.jess-lafrank.com/portfolio"
                target="_blank"
              >
                Portfolio
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
