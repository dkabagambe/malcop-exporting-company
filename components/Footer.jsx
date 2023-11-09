import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer-container">
      <p>&copy;{year} Malcop Exporting Company</p>
      <p className="icons">
        <AiOutlineTwitter />
        <AiFillInstagram />
        <AiFillFacebook />
      </p>
    </div>
  );
};

export default Footer;
