import React, { Component } from "react";

export default class ReplayBox extends Component {
  constructor(props) {
    super();
    this.state = { ...props.replayObjet };
  }

  render() {
    const { coord, id, size, transform } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: coord[1],
          left: coord[0],
          width: size,
          height: size,
          backgroundColor: "#C0C0C0",
          border: "1px solid #C0C0C0",
          transform
        }}
      >
        ReplayBox
      </div>
    );
  }
}
