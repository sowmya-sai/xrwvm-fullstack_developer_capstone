/*jshint esversion: 8 */
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Dealers from "./components/Dealers/Dealers";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/register" element={<Register />}/>
      <Route path="*" element={<Navigate to="/login" />} /> 
    </Routes>
  );
}
export default App;
