import React, { useState, useContext } from "react";
import { Modal, Form } from "react-bootstrap";
import { LoginContext } from "../App";

const RegisterForm = (props) => {
  const { registerUser } = useContext(LoginContext);

  const initialState = { email: "", password: "" };
  const [input, setInput] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await registerUser(input);
    console.log("REG FORM created user token > ", createdUserToken);

    // invoke close modal here
    props.onHide();

    setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h1 className="center">Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label email="email">Email: </Form.Label>
            <Form.Control
              id="email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">Or username</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password: </Form.Label>
            <br />
            <Form.Control
              id="password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </Form.Group>

          <input type="submit" value="Register" />
        </Form>
      </Modal.Body>
    </>
  );
};

export default RegisterForm;
