import React from "react";
import { Link as L } from "react-router-dom";
import "../styles/Home.css";
const Classes = () => {
  return (
    <div className="mnPg">
      <h1>Course Offerings</h1>
      <div className="mnBd">
        <ul>
          <li>
            <L to="/devburnout">Developer Burnout Day (4 Weeks)</L>
          </li>
          <li>
            <L to="/devburnout">Developer Burnout Evening (5 Weeks)</L>
          </li>
         
         <li><h2>Coming Soon</h2></li>
          <li>Part Time Burnout Course</li>
          <li>16 Week Full Developer Course</li>
          <li>32 Week Part Time Full Developer Course</li>
          <li>Individual Computer Training (Windows, oSX, and Linux)</li>
          <li>After Dinner with Scratch Ages 10-13</li>
          <li>Interview Prep</li>
          <li>Continuing Education</li>
        </ul>
      </div>
    </div>
  );
};

export default Classes;
