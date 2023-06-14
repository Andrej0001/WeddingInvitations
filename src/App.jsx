import "./App.css";
import Timer from "./Components/Timer/Timer";
import NameAndDate from "./Components/NameAndDate/NameAndDate";
import Date from "./Components/Date/Date";
import GuestText from "./Components/GuestText/GuestText";

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
    </div>
  );
}

export default App;
