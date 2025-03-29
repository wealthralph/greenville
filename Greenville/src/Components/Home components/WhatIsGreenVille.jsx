import sustainable from "../../assets/images/sustainable.png";

export default function WhatIsGreenville() {
  return (
    <>
      <div className="whatIsGreenville">
        <div className="textContainer">
          <h1 className="textContainerHeader">Experience Waste Disposal services like Never before</h1>
          <p className="whatIsGreenvilleDesc">
            Greenville is an innovative waste management app designed to
            transform the way Lagos tackles waste disposal. Our mission is to
            create a cleaner, healthier, and more sustainable Lagos.
          </p>
          <button className="learnMore">Learn More</button>
        </div>
        <div className="sustainableContainer">
          <img
            src={sustainable}
            alt="sustainable solutions"
            className="sustainableIcon"
          />
        </div>
      </div>
    </>
  );
}
