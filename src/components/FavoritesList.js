import React from "react";
import { Modal } from "react-bootstrap";

const FavoritesList = (props) => {
  return (
    <div>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <ul>
          <li>List of Favorites</li>
          <li>List of Favorites</li>
          <li>List of Favorites from FL</li>
        </ul>
      </Modal.Body>
    </div>
  );
};

export default FavoritesList;
