import React, { Component } from "react";
import { Slider } from "primereact/slider";
class RangeSlider extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <span className="mb-1 text-base ">
          Min:({this.props.value[0]}) - Max:({this.props.value[1]})
        </span>
        <Slider value={this.props.value5} range {...this.props} />
      </div>
    );
  }
}

export default RangeSlider;
