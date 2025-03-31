import sustainable from "../../assets/images/sustainable.png";

export default function WhatIsGreenville() {
  return (
    <div className="whatIsGreenville">
      {/* Left Side: Heading, Text, and Button */}
      <div className="textContent">
        <h1 className="textContainerHeader">
          Experience Waste Disposal Services Like Never before
        </h1>
        <p className="whatIsGreenvilleDesc">
          Greenville is an innovative waste management app designed to transform
          the way Lagos tackles waste disposal. Our mission is to create a
          cleaner, healthier, and more sustainable Lagos.
        </p>
        <button className="learnMore">Learn More</button>
      </div>

      {/* Right Side: Image */}
      <div className="sustainableContainer">
        <img
          src={sustainable}
          alt="sustainable solutions"
          className="sustainableIcon"
        />
      </div>
    </div>
  );
}
