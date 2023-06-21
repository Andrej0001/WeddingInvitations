import "./App.css";
import Timer from "./Components/Timer/Timer";
import NameAndDate from "./Components/NameAndDate/NameAndDate";
import Date from "./Components/Date/Date";
import GuestText from "./Components/GuestText/GuestText";
import Plan from "./Components/Plan/Plan";
import Map from "./Components/Map/Map";
import FixedBackground from "./Loyaut/FixedBackground";
import plumeIcon from "./assets/plumeOpaci.png";

function App() {
  return (
    <div>
      {/* <div className="main-app"> */}

      <FixedBackground>
        {" "}
        <div className="timer">
          <div className="name-title">
            <NameAndDate></NameAndDate>
          </div>
          <Date></Date>
          <Timer></Timer>
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
          <img src={plumeIcon} alt="plume"></img>
        </div>
      </FixedBackground>
    </div>
  );
}

export default App;
