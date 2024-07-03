import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Heros from "./components/hero/Heros";
import Footers from "./components/Footers/Footers";
import About from "./components/About/About";
import Signup from "./components/Signup/Signup";
import OtpVerification from "./components/OtpVerification/OtpVerification";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Background />
                <Heros />
                <About />
                <Footers />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
