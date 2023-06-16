import React from "react";

import firstIcon from "../../assets/ring.png";
import secontIcon from "../../assets/shampan.png";
import thirdIcon from "../../assets/cacke.png";
import fourthIcon from "../../assets/dress.png";
import pshoto from "../../assets/photo.png";
import "./plan.css";
import Dot from "../Dot/Dot";

function Plan() {
  return (
    <div>
      <div className="title">План заходу</div>

      <div className="vertical-line"></div>

      <div className="first-image">
        <div className="pshoto-icon">
          <img src={pshoto} alt="pshoto" />
          <div className="rigth-dot">
            <Dot></Dot>
          </div>
          <div className="title-plan">{"збір гостей".toUpperCase()}</div>
          <div className="title-plan-time">{"17:00".toUpperCase()}</div>
        </div>

        <div className="first-icon">
          <img src={firstIcon} alt="firstIcon" />
          <div className="left-dot">
            <Dot></Dot>
          </div>
          <div className="title-plan">
            {"реєстрація одруження".toUpperCase()}
          </div>
          <div className="title-plan-time">{"17:30".toUpperCase()}</div>
        </div>
        <div className="second-icon">
          <img src={secontIcon} alt="secontIcon" />
          <div className="rigth-dot ">
            <Dot></Dot>
          </div>
          <div className="title-plan">{"банкет".toUpperCase()}</div>
          <div className="title-plan-time">{"18:00".toUpperCase()}</div>
        </div>
        <div className="third-icon">
          <img src={thirdIcon} alt="thirdIcon" />
          <div className="left-dot">
            <Dot></Dot>
          </div>
          <div className="title-plan">{"торт".toUpperCase()}</div>
          <div className="title-plan-time">{"22:00".toUpperCase()}</div>
        </div>
        <div className="fourth-icon">
          <img src={fourthIcon} alt="fourthIcon" />
          <div className="rigth-dot ">
            <Dot></Dot>
          </div>
          <div className="title-plan">{"завершення вечора".toUpperCase()}</div>
          <div className="title-plan-time">{"7:00".toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
