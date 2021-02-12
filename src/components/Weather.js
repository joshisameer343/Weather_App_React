import React, { useState } from "react";
import "./Weather.css";
export default function Weather(props) {
  return <div className="weather">Temperature : {props.weather} &#8451;</div>;
}
