import React from "react";
import './Darkmode.css';

const Darkmode = ({collapsed, toggleLightMode}) => {
  return (
    <li className="sidebar-item navitem">
      <button onClick={toggleLightMode} className="dm-icon-div">
        <div className="dm-icon">
          <span className={`in-circle ${collapsed ? "dark" : ""}`}></span>
        </div>
      </button>
      <span className={`sidebar-name ${collapsed ? "hidden" : " "}`}>
        Dark mode
      </span>
    </li>
  );
};

export default Darkmode;
