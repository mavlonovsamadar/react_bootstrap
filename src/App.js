import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import NotFound from "./components/NotFound";
import './components/style.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Registration from "./components/Registration";

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/section" element={<Section />} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/registration" element={<Registration/>} />
         
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;


// 
//       {/* <Section /> */}
//       <Home />