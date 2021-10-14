import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import FavoritesList from "./FavoritesList";

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
        <FavoritesList />
      </Modal>
    </>
  );
};

export default Nav;
