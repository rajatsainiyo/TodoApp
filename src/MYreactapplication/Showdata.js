import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtodo,
  Deletetodo,
  Updatetodo,
  sreachitem,
} from "../ReduxManagement/Reducer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";

// const ex  = [{
//   name:"aman",body:'black',age:"23",

// },{name:"aman",body:'black',age:"23",}]

// const mybtn=()=>{
//   ex[1] ={...ex[1],name:"rajat",age:"33"}
//   ex[0] ={...ex[1],name:"rajat",age:"33"}
//   console.log(ex,'ex');
// }

const Showdata = () => {
  const statusdata = [
    { status: "Panding" },
    { status: "Complete" },
    { status: "Inprogress" },
  ];
  const priortydata = [
    { priorty: "High" },
    { priorty: "Medium" },
    { priorty: "Low" },
  ];
  const mydata = useSelector((state) => state.Reducer.Todoarray);

  const [indexarray, setIndexarray] = useState("");
  // const [indexvalue, setIndexvalue] = useState("");
  const [statusfalse, setStatusfalse] = useState(false);
  // const [showmodal, setShowmodal] = useState(false);
  const [up, setUp] = useState(false);
  // const [todos, setTodos] = useState([...mydata]);
  const [selectedStatusIndex, setSelectedStatusIndex] = useState("");
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [task1, setTask1] = useState("");
  const [duedate1, setDuedate1] = useState("");
  const [priorty1, setPriorty1] = useState("");
  const [status1, setStatus1] = useState("");

  const dispatch = useDispatch();

  const deletetodo = (val, index) => {
    // 1st method
    // dispatch(Deletetodo(index));
    // 2nd method
    const myfilter = mydata.filter((val, i) => i !== index);
    dispatch(Updatetodo(myfilter));
  };

  const statusbtn = (val, index) => {
    setStatusfalse(true);
    setEditingRowIndex(index);

    setIndexarray(index);
  };

  const task_1 = (e) => {
    setTask1(e.target.value);
  };
  const duedate = (e) => {
    setDuedate1(e.target.value);
  };
  const priorty_1 = (e) => {
    setPriorty1(e.target.value);
  };
  const status_1 = (e) => {
    setStatus1(e.target.value);
  };

  const updatetodo = (val, index) => {
    setStatusfalse(false);
    setStatusfalse(false);
    setEditingRowIndex(false);
    setUp(true);

    const updatedTodoList = [...mydata];
    const existingTodoItem = updatedTodoList[indexarray];

    const updatedTodoItem = {
      ...existingTodoItem,
      task: task1 ? task1 : existingTodoItem.task,
      duedate: duedate1 ? duedate1 : existingTodoItem.duedate,
      status: status1 ? status1 : existingTodoItem.status,
      priorty: priorty1 ? priorty1 : existingTodoItem.priorty,
    };
    updatedTodoList[indexarray] = updatedTodoItem;

    dispatch(Updatetodo(updatedTodoList));

    console.log(updatedTodoList, "kk");
  };

  const seracharray = useSelector((state) => state.Reducer.Searcharray);

  const [search, setSearch] = useState(false);
  const [serachtitle, setSearchtitle] = useState("");
  // console.log(seracharray,'seracharray');

  const searchitem = (e) => {
    const val = e.target.value;
    console.log(val, "val");
    setSearch(true);
    setSearchtitle(val);

    if (val === "") {
      dispatch(sreachitem(val));
    }
    if (seracharray.length === 0) {
      dispatch(sreachitem(val));
    } else {
      const filterdata = mydata.filter((item) => {
        return (
          item.task.toLowerCase().includes(val.toLowerCase()) ||
          item.duedate.toLowerCase().includes(val.toLowerCase()) ||
          item.status.toLowerCase().includes(val.toLowerCase()) ||
          item.priorty.toLowerCase().includes(val.toLowerCase())
        );
      });
      //   console.log(filterdata, "filter");

      dispatch(sreachitem(filterdata));
    }
  };

  // const finditem =()=>{

  // }

  return (
    <>
      <div className="conatiner-fluid containercolor">
        <div className="row">
          <div className="col-lg-12">
            <div className="serachbar d-flex searchinput-1 ">
              {mydata.length > 0 ? (
                <input
                  onChange={searchitem}
                  value={serachtitle}
                  type="search"
                  className="form-control rounded searchinput"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              ) : // (<button
              //   onClick={finditem}
              //   type="button"
              //   className="btn btn-outline-primary  "
              // >
              //   search
              // </button>)
              null}
            </div>
          </div>
        </div>
        {/* {!mydata.length <= 0 ? (
        <a href="/listshow">
          <NavLink className="btn btn-warning" to="/listshow">
            Show list
          </NavLink>
        </a>
      ) : null} */}
        {mydata.length > 0 ? (
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Priorty level</th>
                <th scope="col">due date</th>
                <th scope="col">Status</th>
                <th scope="col">Edit</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {!search ? (
              <tbody>
                {mydata?.map((val, index) => {
                  return (
                    <tr>
                      {/* 1 */}

                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>{val.task}</td>
                      ) : (
                        <td>
                          {" "}
                          <input
                            className="status-input"
                            type="text"
                            //   name="message"
                            name="task"
                            defaultValue={val.task}
                            onChange={(e) => task_1(e)}
                            //   value={tasktodo}
                          />
                        </td>
                      )}

                      {/* 2 */}

                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>{val.priorty}</td>
                      ) : (
                        <td>
                          <select
                          defaultValue={val.priorty}
                           onChange={(e) => priorty_1(e)}
                            class="form-select"
                            aria-label="Default select example"
                          >
                            {/* <option selected>{val.priorty}</option> */}
                            {priortydata.map((item)=>{
                              return(
                                <option value={item.priorty}>{item.priorty}</option>

                              )
                            })}
                           
                          </select>
                          {/* <select
                            // defaultValue={val.priorty}
                            onChange={(e) => priorty_1(e)}
                            name="status"
                            class="form-select"
                            //   defaultValue={priorty}

                            aria-label="Default select example"
                          >
                            {priortydata.map((item) => {
                              console.log(item.priorty,'hhh');
                              return (
                                <option selected >
                                  {item.priorty}
                                </option>
                              );
                            })}
                          </select> */}
                        </td>
                      )}

                      {/* 3 */}
                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>{val.duedate}</td>
                      ) : (
                        <td>
                          <input
                            // name="duedate"
                            defaultValue={val.duedate}
                            onChange={(e) => duedate(e)}
                            type="date"
                          />
                        </td>
                      )}

                      {/* 4 */}

                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>
                          {val.status}
                          {/* <button
                            className="btn btn-warning"
                            onClick={() => statusbtn(val, index)}
                          >
                            Edit Todo
                          </button> */}
                        </td>
                      ) : (
                        <td>
                          <select
                            defaultValue={val.status}
                            onChange={(e) => status_1(e)}
                            // name="status"
                            class="form-select"
                            //   defaultValue={priorty}

                            aria-label="Default select example"
                          >
                            {statusdata.map((item) => {
                              return (
                                <option value={item.status}>
                                  {item.status}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                      )}

                      {/* 5 */}

                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>
                          {" "}
                          <button
                            className="btn btn-warning"
                            onClick={() => statusbtn(val, index)}
                          >
                            Edit Todo
                          </button>
                        </td>
                      ) : null}

                      {/* //6 */}

                      <td>
                        {statusfalse && editingRowIndex === index ? (
                          <button
                            className="btn btn-success"
                            onClick={() => updatetodo(val, index)}
                          >
                            update
                          </button>
                        ) : (
                          <button
                            className="btn btn-danger"
                            onClick={() => deletetodo(val, index)}
                          >
                            delete
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                {seracharray?.map((val, index) => {
                  return (
                    <tr>
                      {/* 1 */}

                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>{val.task}</td>
                      ) : (
                        <td>
                          {" "}
                          <input
                            className="status-input"
                            type="text"
                            //   name="message"
                            name="task"
                            defaultValue={val.task}
                            onChange={(e) => task_1(e)}
                            //   value={tasktodo}
                          />
                        </td>
                      )}

                      {/* 2 */}

                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>{val.priorty}</td>
                      ) : (
                        <td>
                          <select
                            defaultValue={val.priorty}
                            onChange={(e) => priorty_1(e)}
                            name="status"
                            class="form-select"
                            //   defaultValue={priorty}

                            aria-label="Default select example"
                          >
                            {priortydata.map((item) => {
                              return (
                                <option value={item.priorty}>
                                  {item.priorty}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                      )}

                      {/* 3 */}
                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>{val.duedate}</td>
                      ) : (
                        <td>
                          <input
                            name="duedate"
                            defaultValue={val.duedate}
                            onChange={(e) => duedate(e)}
                            type="date"
                          />
                        </td>
                      )}

                      {/* 4 */}

                      {statusfalse !== index && editingRowIndex !== index ? (
                        <td>
                          {val.status}
                          <button
                            className="btn btn-warning"
                            onClick={() => statusbtn(val, index)}
                          >
                            Edit Todo
                          </button>
                        </td>
                      ) : (
                        <td>
                          <select
                            defaultValue={val.status}
                            onChange={(e) => status_1(e)}
                            name="status"
                            class="form-select"
                            //   defaultValue={priorty}

                            aria-label="Default select example"
                          >
                            {statusdata.map((item) => {
                              return (
                                <option value={item.status}>
                                  {item.status}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                      )}

                      {/* 5 */}

                      <td>
                        {statusfalse && editingRowIndex === index ? (
                          <button
                            className="btn btn-success"
                            onClick={() => updatetodo(val, index)}
                          >
                            update
                          </button>
                        ) : (
                          <button
                            className="btn btn-danger"
                            onClick={() => deletetodo(val, index)}
                          >
                            delete
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        ) : null}
      </div>
    </>
  );
};

export default Showdata;
