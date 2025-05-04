import React from "react";
import { FiArrowUp } from "react-icons/fi";
import IkejaImage from "../../assets/images/Ikeja_img.png";
import VIImage from "../../assets/images/VI_img.png";
import EgbedaImage from "../../assets/images/Egbeda_img.png";
import IkoyiImage from "../../assets/images/Ikoyi_img.png";
import LekkiImage from "../../assets/images/Lekki_img.png";
import SurulereImage from "../../assets/images/Surulere_img.png";
const TopAreas = () => {
  const areas = [
    { id: 1, name: "Ikeja", image: IkejaImage },
    { id: 2, name: "VI", image: VIImage},
    { id: 3, name: "Egbeda", image: EgbedaImage},
    { id: 4, name: "Ikoyi", image: IkoyiImage },
    { id: 5, name: "Lekki", image:LekkiImage},
    { id: 6, name: "Surulere", image:SurulereImage },
  ];

  return (
    <div className="top-areas-wrapper">
      <div className="top-areas-container">
        <h2 className="top-areas-title">Top Areas</h2>
        <ul className="top-areas-list">
          {areas.map((area) => (
            <li key={area.id} className="top-areas-item">
              <div className="area-content">
                {area.image && (
                  <img
                    src={area.image}
                    alt={area.name}
                    className="area-image"
                  />
                )}
                <span className="top-areas-name">
                  {area.name}
                  <FiArrowUp className="area-arrow" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopAreas;
