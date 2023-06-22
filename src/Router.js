import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Users from "./Users";
import Details from "./components/Posts/Post";
import UserDetails from "./components/Users/User";
import Layout from "./components/Layout";

export default function RoutesIndex() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <App />
              </Layout>
            }
          ></Route>
          <Route
            path="/post/:id"
            element={
              <Layout>
                <Details />
              </Layout>
            }
          ></Route>
          <Route
            path="/users"
            element={
              <Layout>
                <Users />
              </Layout>
            }
          ></Route>
          <Route
            path="/users/:id"
            element={
              <Layout>
                <UserDetails />
              </Layout>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
