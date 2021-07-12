//rfce

// NAV BAR
import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className="nav nav__black">
      {/* BEM */}
      <div className="nav__contents">
        {/* NEXTFIX LOGO */}
        <img
          className="nav__logo"
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1626119196/Nextfix_logo_vpneqm.png"
          //alt property is for SEO. add words to describe the image. here "nextfix" will the best. You can also leave it empty, but always alt="" needs to be included in img tag.
          alt="nextfix"
        />

        {/* AVATAR LOGO */}
        <img
          className="nav__avatar"
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1626103066/hBEe3tdn_400x400_d7t7jg.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
