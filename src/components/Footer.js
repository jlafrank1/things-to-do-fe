import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div className="footer">
      &copy; 2021 Jess LaFrank
      <a href="https://www.boredapi.com/" target="_blank" rel="noreferrer">
        Bored API
      </a>
      <a href="https://github.com/jlafrank1" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/jesslafrank/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://www.jess-lafrank.com/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        Portfolio
      </a>
    </div>
  );
};

export default Footer;
