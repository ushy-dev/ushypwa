import React, { useEffect } from "react";
import { moreIcon } from "../../Utils/tools";
import ProgressBar from "../progressBar/progressBar";
import "./jobCard.css";

const JobCard = ({
  category,
  title,
  location,
  date,
  progresss,
  images,
  bottomText,
  bottomTextColor,
  bottomTextThemeColor,
  imagewidth,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--productvalue", progresss);
  });

  return (
    <>
      <div className="jobcard__container">
        <div className="jobcard__top">
          <div className="jobcard__left">
            <p className="jobcard__category">{category}</p>
            <button className="jobcard__more">{moreIcon}</button>
          </div>
          <div className="jobcard__right">
            <div>
              <div className="jobcard__divide">
                <div className="jobcard__locationimg">
                  <p className="jobcard__title">{title}</p>
                  <p className="jobcard__location">{location}</p>
                  <p className="jobcard__date">{date}</p>
                </div>
                <div className="jobcard__right-images">
                  <img style={{ width: `${imagewidth}` }} src={images} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="jobcard__bottom"
          style={{
            background: `linear-gradient(90deg, ${bottomTextThemeColor} 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF`,
          }}
        >
          <p
            className="jobcard__bottom-left"
            style={{ color: `${bottomTextColor}` }}
          >
            {bottomText}
          </p>
          <div className="jobcard__progressbottom">
            <ProgressBar
              progress={progresss}
              circleTwoStroke={bottomTextColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
