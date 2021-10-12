import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const EmailResults = (props) => {
  console.log("props on emailResults component", props.activity);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="email-form">
        <button class="button" onClick={handleShow}>
          Email this result
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <form>
              <input name="email" defaultValue="Email address" />
              <br />
              <input name="message" defaultValue="Enter Your Note" />
              <br />
              <button type="submit" value="Email" className="button">
                Send
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default EmailResults;
