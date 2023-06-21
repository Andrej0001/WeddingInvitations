import React from "react";
import congratIcon from "../../assets/congrat.png";
import secontIcon from "../../assets/shampan.png";
import ceremonyIcon from "../../assets/ceremony.png";
import startWeddingIcon from "../../assets/startWedding.png";
import endWeddingIcon from "../../assets/endWedding.png";
import foodWeddingIcon from "../../assets/foodWedding.png";
import "./plan.css";
import Dot from "../Dot/Dot";

function Plan() {
  return (
    <div>
      <div className="title plan">WEDDING DAY</div>

      <div className="vertical-line"></div>

      <div className="first-image">
        <div className="pshoto-icon">
          <img src={startWeddingIcon} alt="pshoto" />
          <div className="rigth-dot" id="first-image-dot">
            <Dot></Dot>
          </div>
          <div className="title-plan">{"збір гостей".toUpperCase()}</div>
          <div className="title-plan-time">{"17:00".toUpperCase()}</div>
        </div>

        <div className="first-icon">
          <img src={ceremonyIcon} alt="firstIcon" />
          <div className="left-dot">
            <Dot></Dot>
          </div>
          <div className="title-plan">
            {"реєстрація одруження".toUpperCase()}
          </div>
          <div className="title-plan-time">{"17:30".toUpperCase()}</div>
        </div>
        <div className="second-icon">
          <img src={congratIcon} alt="secontIcon" />
          <div className="rigth-dot ">
            <Dot></Dot>
          </div>
          <div className="title-plan">{"ПРИВІТАННЯ".toUpperCase()}</div>
          <div className="title-plan-time">{"18:00".toUpperCase()}</div>
        </div>
        <div className="third-icon">
          <img src={foodWeddingIcon} alt="thirdIcon" />
          <div className="left-dot">
            <Dot></Dot>
          </div>
          <div className="title-plan">{"БАНКЕТ".toUpperCase()}</div>
          <div className="title-plan-time">{"19:00".toUpperCase()}</div>
        </div>
        <div className="fourth-icon">
          <img src={endWeddingIcon} alt="fourthIcon" />
          <div className="rigth-dot " id="fourth-icon-dot">
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
