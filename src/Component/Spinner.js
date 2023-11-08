import React, { Component } from "react";
import Loading from "./Loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img style={{ width: 25, height: 25 }} src={Loading} alt="Loading" />
      </div>
    );
  }
}

export default Spinner;
