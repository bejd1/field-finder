import { FunctionComponent } from "react";
import "./Main.css";

const Main: FunctionComponent = () => {
  return (
    <div className="main">
      <h3>Why to use FieldFinder?</h3>
      <div className="main-container">
        <div className="main-container-left">
          <img className="time-light-icon" alt="" src="/time-light.svg" />
          <div className="main-container-left-text">
            <p>Save your time by choosing the nearest pitch</p>
          </div>
        </div>
        <div className="main-container-center">
          <img className="time-light-icon" alt="" src="/search-alt.svg" />
          <div className="main-container-center-text">
            <p>Easy to find</p>
          </div>
        </div>
        <div className="main-container-right">
          <img
            className="time-light-icon"
            alt=""
            src="/order-duotone-line.svg"
          />
          <div className="main-container-right-text">
            <p>Booking when you need</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
