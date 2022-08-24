import React from "react";
import "../../App.css";
function Section({ title, color, Icon, selected }) {
  return (
    <div className="section">
      <div
        className={` ${selected && "selection--selected"}`}
        style={{
          borderBottom: `3px solid ${color}`,
          color: `${selected && color}`,
          display: `flex`,
          marginLeft: `30px`,
          marginRight: `30px`,
          alignItems: `center`,
          fontSize: `small`,
          marginTop: `10px`,
        }}
      >
        <h3>{Icon}</h3>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Section;
