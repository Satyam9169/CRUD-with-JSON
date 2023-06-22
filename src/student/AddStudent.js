import React, { useState } from "react";
import "./common.css";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  
  const [id, setId] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState("");
  const [validate, setValidate] = useState(false);
  const [active, setActive] = useState(true);

  const API = " http://localhost:3030/student";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, first, last, phone, active });
    const studentData = { id, first, last, phone };

    fetch(API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("Saved Successfully");
        navigate("/");
        // return res.json();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="py-5 w-50 m-auto">
        <h3 className="text-center text-primary">Student Registration Form</h3>
        <form className="border border-light" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={first}
              onMouseDown={e=>setValidate(true)}
              onChange={(e) => setFirst(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            {first.length == 0 && validate && <span className="text-danger">*Required field</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              value={last}
              onMouseDown={e=>setValidate(true)}
              onChange={(e) => setLast(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
            {last.length == 0 && validate && <span className="text-danger">*Required field</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone No
            </label>
            <input
              type="text"
              value={phone}
              onMouseDown={e=>setValidate(true)}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
            {phone.length == 0 && validate && <span className="text-danger">*Required field</span>}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setChecked(e.target.checked)}
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
