import "./App.css";
import Timer from "./Components/Timer/Timer";
import NameAndDate from "./Components/NameAndDate/NameAndDate";
import Date from "./Components/Date/Date";

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
    </div>
  );
}

export default App;
