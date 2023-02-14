import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Technologies from "./Components/technologies/Technologies";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
