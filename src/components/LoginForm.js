import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const LoginForm = (props) => {
  const initialState = { email: "", password: "" };
  const [input, setInput] = useState(initialState);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const createdUserToken = await props.signUp(input);
    //
    // if (createdUserToken) {
    //   props.history.push("/");
    // } else {
    //   props.history.push("/");
    //   // console.log("meh?");
    // }

    setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <label email="email">Email: </label>
          <input
            id="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </Modal.Body>
    </>
  );
};

export default LoginForm;
