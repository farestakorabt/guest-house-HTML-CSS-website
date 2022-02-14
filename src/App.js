import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/project-1" element={<Project1 />} />
      <Route exact path="/project-2" element={<Project2 />} />
      <Route exact path="/project-3" element={<Project3 />} />
      <Route exact path="/project-4" element={<Project4 />} />
      <Navigate to="/" replace={true} />
    </Routes>
  );
};

export default App;
