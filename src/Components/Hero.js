import React from "react";
function Hero() {
  return (
    <section id="hero" className="flexbox sections bg-red text-whitesmoke">
      <div className="side"/>
      <div className="width90 height100 hero-content flexbox itemsCenter contentCenter">
        <h1>
          <span>Art and Code</span>
          <br/>
          <span>Outsourcing</span>
        </h1>
      </div>
      <div className="side"/>
    </section>
  );
}
export default Hero;