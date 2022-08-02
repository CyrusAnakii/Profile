import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hobbies from "./components/Hobbies";
import MainPage from "./components/MainPage";
import Education from "./components/Education";
import Background from "./components/Background";
import Writings from "./components/Writings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/Background" element={<Background />} />
      <Route exact path="/Education" element={<Education />} />
      <Route exact path="/Hobbies" element={<Hobbies />} />
      <Route exact path="/Writings" element={<Writings />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
