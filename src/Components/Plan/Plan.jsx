import React from "react";
import congratIcon from "../../assets/congrat.png";
import ceremonyIcon from "../../assets/ceremony.png";
import startWeddingIcon from "../../assets/startWedding.png";
import endWeddingIcon from "../../assets/endWedding.png";
import foodWeddingIcon from "../../assets/foodWedding.png";
import "./plan.css";
import Dot from "../Dot/Dot";
import { motion } from "framer-motion";

function Plan() {
  const animationTitile = {
    hidden: {
      transform: "scale(5)",
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 1 },
      transform: "scale(1)",
    }),
  };

  const animationIconLeft = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.8 },
    }),
  };
  const animationIconRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.8 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
    >
      <motion.div variants={animationTitile} custom={3} className="title plan">
        WEDDING DAY
      </motion.div>

      <div className="vertical-line"></div>

      <div className="first-image">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
          className="pshoto-icon"
        >
          <motion.div variants={animationIconLeft} custom={1}>
            <img src={startWeddingIcon} alt="pshoto" />
            <div className="rigth-dot" id="first-image-dot">
              <Dot></Dot>
            </div>
            <div className="title-plan">{"збір гостей".toUpperCase()}</div>
            <div className="title-plan-time">{"17:00".toUpperCase()}</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
          className="first-icon"
        >
          <motion.div variants={animationIconRight} custom={2}>
            <img src={ceremonyIcon} alt="firstIcon" />
            <div className="left-dot">
              <Dot></Dot>
            </div>
            <div className="title-plan">
              {"реєстрація одруження".toUpperCase()}
            </div>
            <div className="title-plan-time">{"17:30".toUpperCase()}</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
          className="second-icon"
        >
          <motion.div variants={animationIconLeft} custom={3}>
            <img src={congratIcon} alt="secontIcon" />
            <div className="rigth-dot ">
              <Dot></Dot>
            </div>
            <div className="title-plan">{"ПРИВІТАННЯ".toUpperCase()}</div>
            <div className="title-plan-time">{"18:00".toUpperCase()}</div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
          className="third-icon"
        >
          <motion.div variants={animationIconRight} custom={4}>
            <img src={foodWeddingIcon} alt="thirdIcon" />
            <div className="left-dot">
              <Dot></Dot>
            </div>
            <div className="title-plan">{"БАНКЕТ".toUpperCase()}</div>
            <div className="title-plan-time">{"19:00".toUpperCase()}</div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
          className="fourth-icon"
        >
          <motion.div variants={animationIconLeft} custom={5}>
            <img src={endWeddingIcon} alt="fourthIcon" />
            <div className="rigth-dot " id="fourth-icon-dot">
              <Dot></Dot>
            </div>
            <div className="title-plan">
              {"завершення вечора".toUpperCase()}
            </div>
            <div className="title-plan-time">{"7:00".toUpperCase()}</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Plan;
