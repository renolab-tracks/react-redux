import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Details from "./components/Posts/Post";

export default function RoutesIndex() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/post/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
