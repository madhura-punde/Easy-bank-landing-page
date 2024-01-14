import React from "react";
import imagemockups from "../../images/imagemockups.png";
import bgintrodesktop from "../../images/bgintrodesktop.svg";
import "./MiddleSection.css";
import CardSection from "./CardSection.js";
import {
  cardSectionDataUpper,
  cardSectionDataLower,
} from "../CardsectionData.js";

function MiddleSection() {
  const CardSectionUpper = cardSectionDataUpper.map((data) => (
    <CardSection key={data.heading} obj={data}></CardSection>
  ));

  let lowerCards = cardSectionDataLower.map((item, index) => (
    <CardSection key={index} obj={item} type="Lower" />
  ));

  return (
    <>
      {/* Upper Part */}

      <div className="middlesection">
        {/* 1. Left part */}
        <div>
          <h1 className="display-2 heading">Next generation</h1>
          <h1 className="display-2">digital banking</h1>
          <p className="fw-lighter subparagraph">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <button className="btn btn-success btn-md btnRadius">
            Request Invite
          </button>
        </div>

        {/*2. Right part */}

        <div className="rightone">
          <img
            src={bgintrodesktop}
            alt="backgroundImage"
            height={"500px"}
            width={"800px"}
            className="bgImage"
          />
          <img src={imagemockups} className="image-mockups" />
        </div>
      </div>

      {/* Lower Part */}
      <div className="lower-container">
        <h2 style={{ marginTop: "140px", marginLeft: "20px" }}>
          Why choose Easybank?
        </h2>
        <p className="fw-lighter" style={{ marginLeft: "20px" }}>
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p className="fw-lighter" style={{ marginLeft: "20px" }}>
          Control your finances like never before.
        </p>
        <br />
      </div>

      {/* Card section */}
      <div className="container">{CardSectionUpper}</div>
      <br />
      <div className="lower-container">
        <h3 style={{ marginTop: "50px", marginLeft: "25px" }}>
          Latest Articles
        </h3>
        <br />
      </div>
      <div className="container">{lowerCards}</div>
    </>
  );
}

export default MiddleSection;
