import React from "react";
import "../../styles/css/navigation.css";

export default function Navigation({ toggle, handleToggle }) {
  return (
    <div className="navigation main">
      <img src="" alt="logo" />
      <div>
        <div id="burger-toggle">
          <input type="checkbox" checked={toggle} onClick={handleToggle} />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
