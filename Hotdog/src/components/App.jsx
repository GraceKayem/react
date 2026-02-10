import React from "react";
import Header from "./Nav/Header";
import Home from "./Home/Home";
import About from "./About/About"
import Services from "./ServicesPage/Services";
import Footer from "./Nav/Footer";
import AddPets from "./PopForms/AddPets"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <AddPets />
      <Footer />
    </div>
  );
}

export default App;
