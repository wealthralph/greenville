import { img4 } from "../assets";
import { img2 } from "../assets";
import { img3 } from "../assets";


export default function WhatIsGreenville() {
  return (
    <>
    <div className="whatIsGreenville">
      <h1 className="wigHeader pop-up">What is Greenville?</h1>
      <p className="wigParagraph pop-up">
        Greenville is an innovative waste management app designed to transform
        the way Lagos tackles waste disposal. Our mission is to create a
        cleaner, healthier, and more sustainable Lagos by harnessing the power
        of technology. At Greenville, we envision a Lagos where waste management
        is efficient, effective, and environmentally friendly. By achieving
        these goals, we believe Greenville can make a significant impact on the
        environment, public health, and the overall quality of life in Lagos.
        Join us in our mission to create a cleaner, greener, and more
        sustainable Lagos!
      </p>
      </div>
      <div className="statContainer pop-up">
      <div className="stats">
        <img src={img4} alt="trash" className="statIcon"/>
        <h2 className="numb">280,000</h2>
        <p>Collected Yearly</p>
      </div>
      <div className="stats">
        <img src={img2} alt="globe"  className="statIcon"/>
        <h2 className="numb">280,000</h2>
        <p>Collected Yearly</p>
      </div>
      <div className="stats">
        <img src={img3} alt="globe"  className="statIcon"/>
        <h2 className="numb">280,000</h2>
        <p>Collected Yearly</p>
      </div>
      </div>
      
    </>
  );
}
