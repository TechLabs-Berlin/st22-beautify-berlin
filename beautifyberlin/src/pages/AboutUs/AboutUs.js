import React from "react";
import "./AboutUs.css";
import Companydescript from "../../components/companydescript/Companydescript";
import VMV from "../../components/VMV/VMV";

export default function AboutUs() {
  return (
    <div className="bgc">
      <Companydescript />
      <VMV />
    </div>
  );
}
