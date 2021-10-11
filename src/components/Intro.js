import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Intro = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Things To Do</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Looking for something to do? Hit the "I'm bored" button, or filter
              results by category.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Intro;
