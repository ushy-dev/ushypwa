import React from "react";
import ads1 from "../../assets/images/ads1.png";
import ads2 from "../../assets/images/ads2.png";
import ads3 from "../../assets/images/ads3.png";
import "./adsCard.css";

const AdsCard = () => {
  return (
    <div className="adscard__container">
      <img className="adsCard-item ads_a" src={ads1} alt="" />

      <img className="adsCard-item ads_b" src={ads2} alt="" />

      <img className="adsCard-item ads_c" src={ads3} alt="" />
    </div>
  );
};

export default AdsCard;
