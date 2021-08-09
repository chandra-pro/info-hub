import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebars">
      <div className="sidebar__header">
        <h4>Explore new stuffs..</h4>
      </div>
    <div className="sidebar">
      <SidebarOptions />
    </div>
    </div>
  );
}

export default Sidebar;