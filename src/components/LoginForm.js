import React, { useState, useContext } from "react";
import { Modal, Form } from "react-bootstrap";
import { LoginContext } from "../App";

const LoginForm = (props) => {
  const { loginUser } = useContext(LoginContext);

  const initialState = { email: "", password: "" };
  const [input, setInput] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput(initialState);
    try {
      const config = {
        body: JSON.stringify(input),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      };
      console.log("LOGINFORM created configs > ", config);

      const createdUserToken = await loginUser(input, config);
      console.log("LOGIN FORM created user token > ", createdUserToken);
    } catch (error) {
      console.log(error);
    }

    // invoke close modal here
    props.onHide();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h1>Log in</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label email="email">Email: </Form.Label>
            <br />
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
              type="password"
              value={input.password}
              onChange={handleChange}
            />
          </Form.Group>
          <input type="submit" value="Login" />
        </Form>
      </Modal.Body>
    </>
  );
};

export default LoginForm;
