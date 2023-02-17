import React from "react";
import Todoform from "./Todoform";
import Showdata from "./Showdata";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-4">
            <Todoform />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12"></div>
          <Showdata />
        </div>
      </div>
    </div>
  );
};

export default Home;
