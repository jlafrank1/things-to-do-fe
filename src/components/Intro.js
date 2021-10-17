import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Intro = (props) => {
  return (
    <>
      <Container>
        <div>
          <Row className="justify-content-center">
            <Col
              xs={{ span: 12, order: "first" }}
              sm={{ span: 10, order: "last" }}
              md={{ span: 8, order: "last" }}
            >
              <h1>Things To Do</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Looking for something to do? Hit the "I'm bored" button, or
                filter results by category.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Intro;
