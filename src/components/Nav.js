import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Nav = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ul>
        <li>
          <button className="button">Login</button>
        </li>
        <li>
          <button className="button" onClick={handleShow}>
            View Favorites
          </button>
        </li>
      </ul>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ul>
            <li>List of Favorites</li>
            <li>List of Favorites</li>
            <li>List of Favorites</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Nav;
