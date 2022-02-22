import React from "react";
import "./Footer.css";

import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const links = {
  instagram: "https://www.instagram.com/allyviated/",
  linkedIn: "https://www.linkedin.com/in/allyssa-albores-965a81128/",
  github: "https://github.com/allyssaalbores7",
  website: "https://www.allyssa.dev/",
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href={links.website} target="_blank" rel="noopener noreferrer">
          ALLYSSA.DEV
        </a>
        <nav>
          <IconButton
            aria-label="linked-in"
            color="secondary"
            href={links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label="github"
            color="secondary"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="instagram"
            color="secondary"
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
