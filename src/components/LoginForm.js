import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { LoginContext } from "../App";

const LoginForm = (props) => {
  const { loginUser, token } = useContext(LoginContext);
  // console.log("LOGIN BASE_URL > ", BASE_URL)

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
          "access-control-allow-origin": "*",
          "Authorization": `bearer ${token}`,
        }
      }
      console.log("LOGINFORM created configs > ", config)

      const createdUserToken = await loginUser(input, config);
      console.log("LOGIN FORM created user token > ", createdUserToken);



    } catch (error) {
      console.log(error)
    }

    // invoke close modal here
    props.onHide()
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
