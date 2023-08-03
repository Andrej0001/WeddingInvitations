import "./App.css";

import NameAndDate from "./Components/NameAndDate/NameAndDate";
import { MDateWedding } from "./Components/Date/Date";
import { MTimWedding } from "./Components/Timer/TimWedding";
import GuestText from "./Components/GuestText/GuestText";
import Plan from "./Components/Plan/Plan";
import { MotionMap } from "./Components/Map/Mapp";
import FixedBackground from "./Loyaut/FixedBackground";
import plumeIconRight from "./assets/plumeOpaciRight.png";
import plumeIconLeft from "./assets/plumeOpaciLeft.png";
import { motion } from "framer-motion";

function App() {
  const animation = {
    hidden: {
      transform: "scale(5)",
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 2 },
      transform: "scale(1)",
    }),
  };
  const animationImage = {
    hidden: {
      transform: "scale(0.1)",
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 1.5 },
      transform: "scale(1)",
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      className="app"
    >
      <FixedBackground>
        {" "}
        <div className="timer">
          <div className="name-title">
            <NameAndDate></NameAndDate>
          </div>
          <MDateWedding variants={animation} custom={2}></MDateWedding>
          <MTimWedding variants={animation} custom={5}></MTimWedding>
        </div>
        <div className="gues-component">
          <GuestText></GuestText>
        </div>
        <div className="plan-component">
          <Plan></Plan>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="map-component"
        >
          <MotionMap variants={animationImage} custom={5}></MotionMap>
        </motion.div>
        <div className="plume-bk-image">
          <img src={plumeIconLeft} alt="plume" id="plume-2"></img>
          <img src={plumeIconRight} alt="plume" id="plume-1"></img>
        </div>
      </FixedBackground>
    </motion.div>
  );
}

export default App;
