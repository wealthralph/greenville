import { img5 } from "../../assets";
import { img6 } from "../../assets";
import { img7 } from "../../assets";
import { useState } from "react";
import "../..style/service.css";
import { truck } from "../../assets";
import { Gtruck } from "../../assets";
import { building } from "../../assets";

function OurService() {
  const [Services] = useState([
    {
      id: 0,
      icon: truck, // Changed from {truck} to truck
      title: "Dumpster Service",
      serviceInfo:
        "Our Dumpster Service provides convenient and reliable waste disposal solutions for residential, commercial, and industrial projects, with flexible sizes to suit your needs.",
      button: "Learn more  >",
    },
    {
      id: 1,
      icon: Gtruck, // Changed from { Gtruck } to Gtruck
      title: "Truck Service",
      serviceInfo:
        "Our Truck Service is designed to handle large-scale waste collection and disposal efficiently.",
      button: "Learn more  >",
    },
    {
      id: 2,
      icon: building, // Changed from {building } to building
      title: "Industrial Service",
      serviceInfo:
        "Our Industrial Service focuses on managing waste generated from factories, construction sites, and other large-scale industrial operations.",
      button: "Learn more  >",
    },
  ]);

  return (
    <div className="main">
      <div className="bodydiv">
        <blockquote className="inbody">
          <h2 className="inbodytext">Experience Waste Disposal services like Never before</h2>
          <div className="mobile-trash-container">
            {/* <img className="trashBin-mobile" src='./src/assets/images/image.png' alt="A trash bin" /> */}
          </div>
          <span className="inbodysubtext">
            Greenville is an innovative waste management app designed to transform the way Lagos tackles waste disposal. 
            Our mission is to create a cleaner, healthier, and more sustainable Lagos.
          </span>
          <br />
          <button className="learmore-btn">Learn more</button>
        </blockquote>
        <div className="submain"></div>
        <img className="trashBin" src='./src/assets/images/image.png' alt="A trash bin" />
      </div>

      <div className="headerText">
        <h1 className="serviceHeader">Our Services</h1>
        <span className="service-subHeader">
          Connecting Lagos to a cleaner future
        </span>
      </div>
      
      <br></br> <br></br><br></br> <br></br> <br></br>
      <ul className="servicecard">
        {Services.map((service, index) => (
          <li key={index}> 
            <div className="serviceBox">
              <img className="service-icon" src={service.icon} alt={service.title} />
              <h2 className="serviceTitle">{service.title}</h2>
              <br />
              <span className="serviceinfo">{service.serviceInfo}</span> 
              <button className="button">{service.button}</button>           
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OurService;