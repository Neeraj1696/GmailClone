import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number }) {
  return (
    <div className="sidebaroption">
      <h3>{Icon}</h3>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
