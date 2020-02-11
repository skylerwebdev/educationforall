import React, { useState } from "react";
import { NavLink as NL } from "react-router-dom";
import "../styles/Nav.css";
import E from "../sources/images/E.svg";

const NavBar = () => {
  const size = window.innerWidth;
  const [open, setOpen] = useState(false);

  const shownav = () => {
    if (size.width > 768 || open === true) {
      setOpen(false);
      console.log("clicked");
    }
    if (open === false) {
      setOpen(true);
    }
  };

  return (
    <div className={open && size < 768 ? "mN full" : "mN"}>
      <div className="nLt">
        <span className="open" onClick={shownav}>
        <img src={E} alt="Logo" className="logo"/>
        </span>
      </div>

      <div className={open || size < 768 ? "nCt hidden" : "nCt"}>
         <p className="nL center" >Education for All</p> 
      </div>
      <div className={!open || size > 768 ? "nRt hidden" : "nRt"}>
        <NL className="nL" onClick={shownav} exact to="/">
          About
        </NL>
        <NL className="nL" onClick={shownav} to="/classes">
          Courses
        </NL>
        <NL className="nL" onClick={shownav} to="/jobs">
            Careers        </NL>
      </div>
    </div>
  );
};

export default NavBar;