import React from "react";
import logo from "../../images/logo.svg";
import "./Footer.css";
import { ImFacebook2 } from "react-icons/im";
import {
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section-1">
          <img
            className="headerImg"
            alt="Header"
            src={logo}
            width={100}
            height={50}
          />
          {/* <h3 className="try">easybank</h3> */}

          <div className="section-1-subsection">
            <ImFacebook2 size={"1.5em"} color="white" />
            <FaYoutube size={"1.5em"} color="white" />
            <FaTwitter size={"1.5em"} color="white" />
            <FaPinterest size={"1.5em"} color="white" />
            <FaInstagram size={"1.5em"} color="white" />
          </div>
        </div>

        <div className="section-2">
          <p>About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>

        <div className="section-2">
          <p>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>

        <div className="section-2">
          <button className="btn btn-success btn-md btnRadius">
            Request Invite
          </button>
          <p>@Easybank. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
