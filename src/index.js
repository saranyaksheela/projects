import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Month } from "./month";

class Calender extends React.Component {
  render() {
    return (
      <div className="calender">
        <div>
          <h1>MoodSwing Tracker</h1>
        </div>
        <div>
          <Month />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Calender />, document.getElementById("root"));
