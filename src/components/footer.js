import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/BabilOussama">
        <FontAwesomeIcon size="2x" icon={faTwitterSquare} />
      </a>
      <a href="https://web.facebook.com/oussama.babil">
        <FontAwesomeIcon size="2x" icon={faFacebookSquare} />
      </a>
      <a href="https://www.instagram.com/oussama_babile">
        <FontAwesomeIcon size="2x" icon={faInstagramSquare} />
      </a>
      <a href="https://github.com/oussabba">
        <FontAwesomeIcon size="2x" icon={faGithubSquare} />
      </a>
    </footer>
  );
}
