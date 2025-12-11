import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TextImg from "./Components/TextImg";
import Video from "./Components/Video";
import Project_contuct from "./Components/Project_contuct";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TextImg />
      <Video />
      <Project_contuct />
      <Footer />
    </div>
  );
};

export default App;
