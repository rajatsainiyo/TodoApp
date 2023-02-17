import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
  useNavigate,
} from "react-router-dom";

const Headbar = () => {
  const mydata = useSelector((state) => state.Reducer.Todoarray);
  return (
    <>
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                <NavLink to="/home">Home</NavLink>{" "}
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              {!mydata.length <= 0 ? (
                <a class="nav-link" href="/listshow">
                  <NavLink to="/listshow">View list</NavLink>
                </a>
              ) : null}
              {/* <a class="nav-link" href="/listshow"><NavLink to="/listshow">View list</NavLink></a> */}
            </li>
           
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Headbar;
