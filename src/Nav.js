//rfce

// NAV BAR
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        {/* NEXTFIX LOGO */}
        <img
          className="nav__logo"
          src="https://res.cloudinary.com/dhyagpwyl/image/upload/v1626102464/41f06ef73c50b9771360dc1a858750fd_lzskhw.jpg"
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
