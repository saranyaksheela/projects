import React from "react";
import { Example } from "./note-pad";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.day, isnote: false };
  }

  showNotes() {
    return <Example />;
  }

  render() {
    return (
      <div>
        <div>
          <button className="square">{this.state.count}</button>
        </div>
        <div>{true && <Example />}</div>
      </div>
    );
  }
}
