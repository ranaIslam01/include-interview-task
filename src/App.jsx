import React from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import TextImg from "./Components/TextImg";
import Project_contuct from "./Components/Project_contuct";
import Video from "./Components/Video";

const App = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <TextImg></TextImg>
      </section>
      <section>
        <Video/>
      </section>

      <section>
        <Project_contuct></Project_contuct>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default App;
