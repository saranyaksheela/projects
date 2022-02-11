import React from "react";
import { NotePad } from "./note-pad";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.day, isnote: false };
  }

  handleShow = () => {
    this.setState({
      isnote: true,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button className="square">
            <button onClick={this.handleShow}>{this.state.count}</button>
          </button>
        </div>
        <div>{this.state.isnote && <NotePad />}</div>
      </div>
    );
  }
}
