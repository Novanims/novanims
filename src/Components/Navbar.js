import React from "react";
function Navbar() {
  return (
    <nav className="flexbox navbar text-red bg-smoke">
      <div className="side"/>
      <div className="navMiddle">
        <a href=" " className="text-red logo "><h1>Novanims</h1></a>
        <div className="navOptions">
          <a href="#hero" className="text-red"><h3>About</h3></a>
          <a href="#play" className="text-red"><h3>Play</h3></a>
          <a href="#services" className="text-red"><h3>Services</h3></a>
          <a href="#contact" className="text-red"><h3>Contact</h3></a>
        </div>
      </div>
      <div className="side"/>
    </nav>
  );
}
export default Navbar;