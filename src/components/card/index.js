import React from "react";
import "./Card.scss";

const CardHeaderComponent = (props) => {
  return <div className="headerCard">{props.children}</div>;
};

const CardHeaderTwoComponent = (props) => {
  return <div className="headerCardTwo">{props.children}</div>;
};

const PlainCardComponent = (props) => {
  return <div className="plainCard">{props.children}</div>;
};

const CardComponent = (props) => {
  return <div className="cardComponent">{props.children}</div>;
};

const CardFilterComponent = (props) => {
  return <div className="cardFilter">{props.children}</div>;
};

export {
  CardHeaderComponent,
  CardComponent,
  CardHeaderTwoComponent,
  PlainCardComponent,
  CardFilterComponent,
};
