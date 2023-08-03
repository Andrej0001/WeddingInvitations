import React from "react";
import calendar from "../../assets/Calendar.png";
import "./guest-text.css";
import heartIcon from "../../assets/Vector.png";
import { motion } from "framer-motion";

const GuestText = () => {
  const animation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.8 },
      // transform: "scale(1)",
    }),
  };

  const animationImage = {
    hidden: {
      transform: "scale(0.1)",
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.8 },
      transform: "scale(1)",
    }),
  };
  const heartAnimation = {
    hidden: {
      transform: "scale(30)",

      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 1 },
      transform: "scale(1)",
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="main-guest-component"
    >
      <motion.div variants={animation} custom={1} className="title">
        Дорогі наші друзі та рідні!
      </motion.div>
      <motion.div variants={animation} custom={2} className="description">
        {"ви отримали це посилання, а значить ми поспішаємо повідомити вам важливу новину!".toUpperCase()}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <motion.div
          variants={animation}
          custom={3}
          className="title"
          id="we-merried"
        >
          Ми одружуємось !
        </motion.div>
        <motion.div variants={animation} custom={4} className="description">
          {"і ми дуже хочемо поділити з вами це щасливе свято".toUpperCase()}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="footer-title-guest"
      >
        <motion.div variants={animation} custom={5}>
          {"чекаємо вас на нашому весіллі о 17:00".toUpperCase()}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        className="image-calendar"
      >
        <motion.img
          variants={animationImage}
          custom={2}
          src={calendar}
          alt="calendar"
        ></motion.img>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 1, once: true }}
        className="heart-icon"
      >
        <motion.img
          variants={heartAnimation}
          custom={6}
          src={heartIcon}
          alt="heartIcon"
        ></motion.img>
      </motion.div>
    </motion.div>
  );
};

export default GuestText;
