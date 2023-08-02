import "./App.css";

import NameAndDate from "./Components/NameAndDate/NameAndDate";
import { MDateWedding } from "./Components/Date/Date";
import { MTimWedding } from "./Components/Timer/TimWedding";
import GuestText from "./Components/GuestText/GuestText";
import Plan from "./Components/Plan/Plan";
import Map from "./Components/Map/Map";
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
      transition: { delay: custom * 0.2, duration: 0.8 },

      transform: "scale(1)",
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
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
        <div className="map-component">
          <Map></Map>
        </div>
        <div className="plume-bk-image">
          <motion.img
            // variants={animation}
            src={plumeIconLeft}
            alt="plume"
            id="plume-2"
          ></motion.img>
          <motion.img
            // variants={animation}
            // custom={4}
            src={plumeIconRight}
            alt="plume"
            id="plume-1"
          ></motion.img>
        </div>
      </FixedBackground>
    </motion.div>
  );
}

export default App;
