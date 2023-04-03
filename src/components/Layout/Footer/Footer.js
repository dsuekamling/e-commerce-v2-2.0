import React from 'react';

function Footer () {
  return(
  <footer className="Footer">
    <div className="Footer__links">
      <a href="https://www.instagram.com/?hl=en" alt="instagram link" aria-label="Visit our social media page on Instagram"><i className="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/" alt="facebook link" aria-label="Visit our social media page on Facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/?lang=en" alt="twitter link" aria-label="Visit our social media page on Twitter"><i className="fab fa-twitter"></i></a>
      <a href="https://twitter.com/?lang=en" alt="twitter link" aria-label="Visit our social media page on Twitter"><i className="fab fa-google-plus-g"></i></a>
    </div>

    <div className="Footer__copyright">
      <p  className="Footer__highlightText" >SURFS UP</p>
      <p className="Footer__text">&copy; Copyright 2023 Surfs Up Inc.</p>
      <p className="Footer__text">All rights reserved.</p>
    </div>
  </footer>
)};

export default Footer;