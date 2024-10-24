import { useState } from "react";
import "../App.css";
import SidebarList from "./SidebarList";

const FixedNav = ({ openSidebar, lightmode, toggleLightMode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`FixedNav ${collapsed ? "collapsed" : ""} ${
        openSidebar ? "showSidebar" : "hideSidebar"
      } ${lightmode ? "lightmode" : "darkmode"}`}
    >
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "Expand" : "Collapse"}
      </button>
      <nav>
        <div className="LogoBox">
          <div className="bluelogo">Full Logo</div>
        </div>
        <SidebarList collapsed={collapsed} toggleLightMode={toggleLightMode} />
      </nav>
    </div>
  );
};

export default FixedNav;
