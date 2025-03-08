import React from "react";
import { Statistic } from "antd";
import "./Timer.css";

const Timer = ({ deadline }) => {
  return (
    <div className="custom-timer">
      <Statistic.Countdown value={deadline} format="mm:ss" />
    </div>
  );
};

export default Timer;
