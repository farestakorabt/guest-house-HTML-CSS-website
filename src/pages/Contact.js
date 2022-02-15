import React from "react";
import ButtonSlide from "../components/ButtonSlide";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <main>
      <div className="project">
        <Mouse/>
        <Navigation />
        <Logo />
        <ButtonSlide left={"/project4"} />
      </div>
    </main>
  );
};

export default Contact;
