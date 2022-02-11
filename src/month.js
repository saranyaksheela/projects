import React from "react";
import { Square } from "./square";

export class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), count: 1 };
  }

  render() {
    const dayList = [];
    const space = " ";
    var monthDict = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "Ocotber",
      11: "November",
      12: "December",
    };
    let newDate = new Date();
    //let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    //as of now hardcoding the number of days
    for (let i = 1; i <= 31; i++) {
      dayList.push(<Square day={i} />);
    }
    const monthName = Object.entries(monthDict).map(([key, value]) => {
      return (
        <div key={key}>
          {month === key ? (
            <h2>
              {year} {space}
              {value}
            </h2>
          ) : null}
        </div>
      );
    });
    return (
      <div>
        <div>
          <h2>{monthName}</h2>
        </div>
        <div>{dayList}</div>
      </div>
    );
  }
}
