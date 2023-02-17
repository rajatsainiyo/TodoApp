import React, { useState } from "react";
// import Showdata from "./Showdata";
import Showdata from "./Showdata";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import { addtodo } from "../ReduxManagement/Reducer";

const Todoform = () => {
  const [tasktodo, setTasktodo] = useState("");
  const [mytodo, setMytodo] = useState({
    task: "",
    priorty: "",
    duedate: "",
    status: "",
  });

  

  //   const mydata = useSelector((state) => state.Reducer.Todoarray);
  //   console.log(mydata,'lll');

  const priortydata = [
    { priorty: "High" },
    { priorty: "Medium" },
    { priorty: "Low" },
  ];

  const statusdata = [
    { status: "Panding" },
    { status: "Complete" },
    { status: "Inprogress" },
  ];
  //   const [priortyname, setPriortyname] = useState("");
  //   const [datepiker, setdatepiker] = useState("");
  //   const [isShow, invokeModal] = React.useState(false);

  const dispatach = useDispatch();
  const navigate = useNavigate();
  //   const initModal = () => {
  //     return invokeModal(!false);
  //   };

  const saveTodobtn = () => {
    // invokeModal(!false);
    // let{task,priorty,duedate}=mytodo;
    // console.log(mytodo,'mytodo');
    

    if (mytodo !== 0) {
      navigate("/home");
      if (mytodo.task === "") {
        alert("Please add Task");
      } else {
        if (mytodo.priorty === "") {
          alert("Please Choose priorty");
        } else {
          if (mytodo.duedate === "") {
            alert("Please Mention duedate");
          } else {
            if (mytodo.status === "") {
              alert("Please Choose status");
            } else {
                alert("Task Added Sueccesfully")
              dispatach(addtodo(mytodo));
             
            }
          }
        }
      }
    }

    
  };

  const duedate = (e) => {
    const { name, value } = e.target;
    setMytodo({ ...mytodo, [name]: value });
  };

  return (
    <>
      <div className="container-fluid cont-fluid">
        <div className="container my-cont">
          <div className="row">
            <div className="col-lg-12 mt-4">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Add task
              </button>



              

              <div
                class="modal fade"
                id="exampleModalLong"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title heading"
                        id="exampleModalLongTitle"
                      >
                        Add Task
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body d-block content-block ">
                      <div className="box ">
                        <label style={{ color: "black", fontWeight: "600px" }}>
                          Task name
                        </label>
                        <input
                          type="text"
                          //   name="message"
                          name="task"
                          onChange={duedate}
                          //   value={tasktodo}
                        />
                        <br></br>
                        <label style={{ color: "black" }}>Priorty Level</label>
                        <select
                          onChange={duedate}
                          name="priorty"
                          class="form-select"
                          aria-label="Default select example"
                        >
                          {priortydata.map((item) => {
                            return (
                              <option defaultValue={item.priorty} >
                                {item.priorty}
                              </option>
                            );
                          })}
                        </select>
                        <br></br>
                        <label style={{ color: "black" }}>Due date</label>
                        <input name="duedate" onChange={duedate} type="date" />
                      </div>
                      <label style={{ color: "black" }}>Status</label>
                      <select
                        onChange={duedate}
                        name="status"
                        class="form-select"
                        //   defaultValue={priorty}

                        aria-label="Default select example"
                      >
                        {statusdata.map((item) => {
                          return (
                            <option
                              defaultValue={item.status}
                              value={item.status}
                            >
                              {item.status}
                            </option>
                          );
                        })}
                      </select>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          data-dismiss="modal"
                          onClick={saveTodobtn}
                          type="button"
                          class="btn btn-primary"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-4 ">
              <Showdata />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todoform;
