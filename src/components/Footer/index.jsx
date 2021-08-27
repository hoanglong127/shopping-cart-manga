import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <h3 className="footer__logo">
          Manga<span>World</span>
        </h3>
        <div className="footer__social">
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="footer__copyright">
          &copy; 2021 MangaWorld. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
