import React from "react";
import { Square } from "./square";

export class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), count: 1 };
  }

  render() {
    const name = "February: 2022";

    return (
      <div>
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        <div className="name">{name}</div>
        <div className="week-row">
          <Square day={this.state.count} />
          <Square day={this.state.count + 1} />
          <Square day={this.state.count + 2} />
          <Square day={this.state.count + 3} />
          <Square day={this.state.count + 4} />
          <Square day={this.state.count + 5} />
          <Square day={this.state.count + 6} />
        </div>
        <div className="week-row">
          <Square day={this.state.count + 7} />
          <Square day={this.state.count + 8} />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div className="week-row">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div className="week-row">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div className="week-row">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}
