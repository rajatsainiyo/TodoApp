import React from "react";
import Reactapp from "./MYreactapplication/Reactapp";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Showdata from "./MYreactapplication/Showdata";
import Showitemdata from "./MYreactapplication/Showitemdata";
import Headbar from "./MYreactapplication/Headbar";

const AppRoute = () => {
  return (
    <Router>
      {/* <Reactapp/> */}
      <Headbar />

      <Routes>
        <Route path="/home" element={<Reactapp Component={Reactapp} />} />
        <Route path="/showdata" element={<Showdata Component={Showdata} />} />
        <Route
          path="/listshow"
          element={<Showitemdata Component={Showitemdata} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoute;
