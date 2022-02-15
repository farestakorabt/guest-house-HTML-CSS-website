import React from "react";
import ButtonSlide from "../components/ButtonSlide";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Mouse from "../components/Mouse";

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonSlide left={"/"} right={"/project2"} />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonSlide left={"/project1"} right={"/project3"} />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonSlide left={"/project2"} right={"/project4"} />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonSlide left={"/project3"} right={"/contact"} />
      </div>
    </main>
  );
};
