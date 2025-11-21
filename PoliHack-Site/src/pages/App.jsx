import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import PastEdition from "./PastEdition";
import PastEditionsTwo from "./PastEditionsTwo";
import Loading from "../components/Loading";
import CurrentEdition from "./CurrentEdition";
import Register from "./Register";
import styles from "./App.module.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Router>
        {!isLoading && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/current-edition" element={<CurrentEdition />} /> */}
          <Route path="/past-edition" element={<PastEdition />} />
          <Route path="/past-editions-2" element={<PastEditionsTwo />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
