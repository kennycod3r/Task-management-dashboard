import React from "react";
//import svg0 from '../assets/svg0.svg';
import svg1 from '../assets/svg1.svg';
import svg2 from '../assets/svg2.svg';
import svg3 from '../assets/svg3.svg';
import svg4 from '../assets/svg4.svg';
import svg5 from '../assets/svg5.svg';
import svg6 from '../assets/svg6.svg';
import Darkmode from "./Darkmode/Darkmode";




const SidebarList = ({collapsed, toggleLightMode}) => {
  const sidebarItems = [
   
    { name: "Home", icon: svg2 },
    { name: "Events", icon: svg3, count: 3 },
    { name: "Speakers", icon: svg4, count: 3 },
    { name: "Reports", icon: svg5, count: 3 },
    { name: "Notifications", icon: svg1, count: 3 },
    { name: "Activity", icon: svg6, count: 3 },
    { name: "Messages", icon: svg6, count: 3 },
    { name: "Documents", icon: svg6, count: 3 },
    { name: "Settings", icon: "⚙️", count: 3 },
    { name: "Collapse", icon: svg6 },
    { name: "Dark mode", icon: "🌙" },
    { name: "Subtitle", icon: "🔖" },
    { name: "Rudra Devi", icon: "👤" },
    { name: "rudra.devi@gmail.com", icon: "✉️" },
  ];

  return (
    <ul className="sidebar-list navlists">
      {sidebarItems.map((item, index) => (
        <li key={index} className="sidebar-item navitem">
          <div className="icondiv">
            <img src={item.icon} alt="" className="sidebar-icon" />
          </div>
          <span className={`sidebar-name ${collapsed ? "hidden" : " "}`}>
            {item.name}
          </span>
          {item.count && <span className="item-count hidden">{item.count}</span>}
        </li>
      ))}
      <Darkmode collapsed={collapsed} toggleLightMode ={toggleLightMode} />
    </ul>
  );
};

export default SidebarList;