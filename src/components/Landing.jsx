import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import RegisteredUser from "./RegisteredUser";
import { RegistrationForm } from "./RegistrationForm";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/user" element={<RegisteredUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
