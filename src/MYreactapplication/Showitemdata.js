import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import "../Todo.css";
import { sreachitem } from "../ReduxManagement/Reducer";

const Showitemdata = () => {
  const [serachtitle, setSearchtitle] = useState("");
  const dispatach = useDispatch();
  const [search, setSearch] = useState(false);

  // const showitem= useSelector((state)=>state.Reducer.Todoarray)
  const showitem = useSelector((state) => state.Reducer.Todoarray);
  const seracharray = useSelector((state) => state.Reducer.Searcharray);

  console.log(seracharray, "showitem");

  const searchitem = (e) => {
    const val = e.target.value;
    console.log(val, "val");
    setSearch(true);
    setSearchtitle(val);

    if (val === "") {
      dispatach(sreachitem(val));
    }
    if (seracharray.length === 0) {
      dispatach(sreachitem(val));
    } else {
      const filterdata = showitem.filter((item) => {
        return (
          item.task.toLowerCase().includes(val.toLowerCase()) ||
          item.duedate.toLowerCase().includes(val.toLowerCase()) ||
          item.status.toLowerCase().includes(val.toLowerCase()) ||
          item.priorty.toLowerCase().includes(val.toLowerCase())
        );
      });
      //   console.log(filterdata, "filter");

      dispatach(sreachitem(filterdata));
    }
  };
  const finditem = () => {};

  return (
    <>
      <div className="container-fluid cont-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="btnbox">
                <a href="/home">
                  <NavLink className="btn btn-warning" to="/home">
                    Go to Edit
                  </NavLink>
                </a>
              </div>
              <div className="conatiner cont-cox">
                <div className="serachbar d-flex searchinput-1 ">
                  <input
                    onChange={searchitem}
                    value={serachtitle}
                    type="search"
                    className="form-control rounded searchinput"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button
                    onClick={finditem}
                    type="button"
                    className="btn btn-outline-primary  "
                  >
                    search
                  </button>
                </div>

                {/* <a href="/home">
                  <NavLink className="btn btn-warning" to="/home">
                    Go to Edit
                  </NavLink>
                </a> */}

                <table className="table  table-item  ">
                  <thead className="thead-dark ">
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Priorty level</th>
                      <th scope="col">due date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>

                  {!search ? (
                    <tbody>
                      {showitem?.map((item) => {
                        return (
                          <tr>
                            <td>{item.task}</td>
                            <td>{item.priorty}</td>
                            <td>{item.duedate}</td>
                            <td>{item.status}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  ) : (
                    <tbody>
                      {seracharray?.map((item) => {
                        return (
                          <tr>
                            <td>{item.task}</td>
                            <td>{item.priorty}</td>
                            <td>{item.duedate}</td>
                            <td>{item.status}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showitemdata;
