import React from "react";
import "./date.css";
import { forwardRef } from "react";
import { motion } from "framer-motion";

export const DateWedding = forwardRef(({ props }, ref) => {
  return (
    <div className="main-date-style" ref={ref}>
      <div className="day">СУБОТА</div>
      <div className="vetical-line"></div>
      <div className="date-and-year">
        <div className="date">30</div>
        <div className="year">2023</div>
      </div>
      <div className="vetical-line"></div>

      <div className="mouns">ВЕРЕСЕНЬ</div>
    </div>
  );
});

export const MDateWedding = motion(DateWedding);
