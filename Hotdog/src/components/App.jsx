import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./Nav/Header.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx"
import Services from "../pages/ServicesPage/Services.jsx";
import AddPets from "../pages/Pets.jsx";
import Footer from "./Nav/Footer.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/addpets" element={<AddPets />} />
        </Routes>
        </main>

      <Footer />
    </>
  );
}

export default App;
