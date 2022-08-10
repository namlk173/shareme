import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./container/Home";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;