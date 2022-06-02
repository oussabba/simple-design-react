import React from "react";
import image from "../images/my-image.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <img src={image} alt="" className="my-image" />
      <h3>Oussama Babile</h3>
      <h6>Frontend developer</h6>
      <a href="babile.me">babile.me</a>
      <div className="contact">
        <div className="email">
          <FontAwesomeIcon size="sm" icon={faEnvelope} />
          &nbsp;&nbsp; Email
        </div>
        <div className="linkedin">
          <FontAwesomeIcon size="sm" icon={faLinkedinIn} />
          &nbsp;&nbsp;LinkedIn
        </div>
      </div>
    </header>
  );
}
