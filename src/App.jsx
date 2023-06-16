import "./App.css";
import Timer from "./Components/Timer/Timer";
import NameAndDate from "./Components/NameAndDate/NameAndDate";
import Date from "./Components/Date/Date";
import GuestText from "./Components/GuestText/GuestText";
import Plan from "./Components/Plan/Plan";
import Map from "./Components/Map/Map";

function App() {
  return (
    <div className="main-app">
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
    </div>
  );
}

export default App;
