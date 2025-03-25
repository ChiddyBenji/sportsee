import React from "react";
import icon1 from "../images/icon(1).png";
import icon2 from "../images/icon(2).png";
import icon3 from "../images/icon(3).png";
import icon4 from "../images/icon(4).png";

function NavBar() {
  const copyright = ["Copiryght, SportSee 2025"];
  return (
    <div className="content-navbar">
      <div className="content-icones">
        <img src={icon1} alt="Icon 1" />
        <img src={icon2} alt="Icon 2" />
        <img src={icon3} alt="Icon 3" />
        <img src={icon4} alt="Icon 4" />
      </div>
      <div className="content-copyright">
        <p>{copyright}</p>
      </div>
    </div>
  );
}

export default NavBar;
