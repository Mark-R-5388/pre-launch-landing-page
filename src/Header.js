import React from "react";
import headerLeft from "./images/illustration-hero-left.svg";
import headerRight from "./images/illustration-hero-right.svg";

function Header() {
  return (
    <div>
      <div className="header-main-flex-container">
        <img className="header-image-left" src={headerLeft} alt="header-left" />
        <div className="header-flex-container">
          <h1 className="biggest-text">
            Get paid for the work you <span className="span-color">love</span>{" "}
            to do.
          </h1>
          <p className="smallest-text">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
        </div>
        <img
          className="header-image-right"
          src={headerRight}
          alt="header-right"
        />
      </div>
    </div>
  );
}

export default Header;
