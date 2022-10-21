import { Spin } from "antd";
import React from "react";
import "./Loading.scss";

const LoadingComponent = () => {
  return (
    <div className="spinnerContainer">
      <Spin size="large" />
      <h2 className="loading-title">Please Wait . . .</h2>
    </div>
  );
};

export default LoadingComponent;
