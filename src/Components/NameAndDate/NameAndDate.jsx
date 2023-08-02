import React from "react";
import "../../App.css";
import "./name-and-date.css";
import { motion } from "framer-motion";

const NameAndDate = () => {
  const animation = {
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      className="our-name"
    >
      <motion.div variants={animation} className="male-name">
        A
      </motion.div>
      <motion.div variants={animation} className="and-between-name">
        &
      </motion.div>
      <motion.div variants={animation} className="female-name">
        H
      </motion.div>
    </motion.div>
  );
};

export default NameAndDate;
