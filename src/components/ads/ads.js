import React from "react";
import AdsCard from "../adsCard/adsCard";

import TitleCard from "../titleCard/titleCard";


import "./ads.css";
const Ads = () => {

  return (
    <>
      <TitleCard name="Ads" />
      <AdsCard />
      <TitleCard name="Today" />
    </>
  );
};

export default Ads;
