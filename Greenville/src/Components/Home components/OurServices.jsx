import { ctrash } from "../../assets";
import { ctruck } from "../../assets";
import { cbuilding } from "../../assets";
import { useState } from "react";


export default function OurService(){

    const [Services] = useState([
        {
          id: 0,
          icon: ctrash, 
          title: "Dumpster Service",
          serviceInfo:
            "Our Dumpster Service provides convenient and reliable waste disposal solutions for residential, commercial, and industrial projects, with flexible sizes to suit your needs.",
          button: "Learn more  >",
        },
        {
          id: 1,
          icon: ctruck,
          title: "Truck Service",
          serviceInfo:
            "Our Truck Service is designed to handle large-scale waste collection and disposal efficiently.",
          button: "Learn more  >",
        },
        {
          id: 2,
          icon: cbuilding, 
          title: "Industrial Service",
          serviceInfo:
            "Our Industrial Service focuses on managing waste generated from factories, construction sites, and other large-scale industrial operations.",
          button: "Learn more  >",
        },
      ]);
    return(
        <>
<div className="main">
      <div className="headerText">
        <h1 className="serviceHeader">Our Services</h1>
        <span className="service-subHeader">
          Connecting Lagos to a cleaner future
        </span>
      </div>
      <ul className="servicecard">
        {Services.map((service, index) => (
          <li key={index}> 
            <div className="serviceBox">
              <img className="service-icon" src={service.icon} alt={service.title} />
              <h2 className="serviceTitle">{service.title}</h2>
              <span className="serviceinfo">{service.serviceInfo}</span> 
              <button className="button">{service.button}</button>           
            </div>
          </li>
        ))}
      </ul>
    </div>
        </>
    )
}





