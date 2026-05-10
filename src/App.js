import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import About from "./Components/About";
import CompPlay from "./Components/CompPlay";
import Services from "./Components/Services";
import Contact from "./Components/Contact"
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CompPlay/>
    <Services/>
    <Contact/>
    </>
  );
}
export default App;

/*
<section id="about" className="bg-red text-whitesmoke">
        <div className="side"/>
        <div className="about-box">
            <h1>
                <span>Art and Code Outsourcing,</span>
                <br/>
                <span>from Brazil to the world!</span>
            </h1>
        </div>
        <div className="side"/>
    </section>
    <section id="play" className=" text-red">
        <div className="side"/>
        <div className="content-box">
            <div className="buffer"/>
            <div className="play-box">
                <h2>Something playful<br/>this way comes...
                <br/>Soon!</h2>
            </div>
        </div>
        <div className="side"/>
    </section>
    <section id="services" className=" bg-red text-whitesmoke">
        <div className="side"/>
        <div className="content-box">
            <div className="buffer"/>
            <h2 className="title">Services</h2>
            <div className="serv-box">
                <div className="w-sample">
                    <div className="img-sample"/>
                    <h3>Concept Art</h3>
                </div>
                <div className="w-sample">
                    <h3>3D Modeling</h3>
                    <div className="img-sample"/>
                </div>
                <div className="w-sample">
                    <div className="img-sample"/>
                    <h3>Game Implementation</h3>
                </div>
            </div>
        </div>
        <div className="side"/>
    </section>
    <section id="contact" className="text-red">
        <div className="side"/>
        <div className="contact-box">
            <h2>
                Got questions?
                <br/>
                Wanna co-dev a project?
                <br/>
                Reach out at novanims@proton.me
            </h2>
        </div>
        <div className="side"/>
    </section>
*/