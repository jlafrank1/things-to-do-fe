import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";
import { Row, Col, Container } from "react-bootstrap";

export const DataContext = React.createContext();

const Filters = (props) => {


  const types = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const [activity, setActivity] = useState();
  const [type, setType] = useState();

  const getImBoredResult = async () => {
    const newResult = await fetch("http://www.boredapi.com/api/activity/");
    const parsedResult = await newResult.json();
    const { activity, type } = parsedResult;
    setActivity(activity);
    setType(type);
  };

  const getTypeResult = async (e) => {
    let type = e.target.value;
    const newResult = await fetch(
      `http://www.boredapi.com/api/activity?type=${type}`
    );
    const parsedResult = await newResult.json();
    const { activity } = parsedResult;
    setActivity(activity);
    setType(type);
  };

  useEffect(() => {
    setActivity();
    setType();
  }, []);

  const typeButton = types.map((type) => (
    <>
      <button
        onClick={getTypeResult}
        key="{type}"
        value={type}
        className="button filter"
      >
        {type}
      </button>
    </>
  ));

  return (
    <>
      <DataContext.Provider value={{ activity: activity, type: type }}>
        <Container>
          <Row>
            <Col
              xs={{ span: 12, order: "last" }}
              sm={{ span: 6, order: "first" }}
              md={{ span: 3, order: "first" }}
            >
              <div>
                <button
                  onClick={getImBoredResult}
                  className="button bored-button"
                >
                  I'm <br /> Bored
                </button>

                <div>{typeButton}</div>
              </div>
            </Col>

            <Col
              xs={{ span: 12, order: "first" }}
              sm={{ span: 6, order: "last" }}
              md={{ span: 9, order: "last" }}
            >
              <div>
                <h2>You should:</h2>
                <br />
                <Results />
              </div>
            </Col>
          </Row>
        </Container>
      </DataContext.Provider>
    </>
  );
};

export default Filters;
