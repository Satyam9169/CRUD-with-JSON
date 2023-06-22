import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  
  const { id } = useParams();
  const API = "http://localhost:3030/student/" + id;
  const navigate = useNavigate();
  // const [data, setData] = useState({});

  // const [sid, setSId] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState("");
  const [active, setActive] = useState(true);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // setData(resp);
        // setSId(resp.sid)
        setFirst(resp.first)
        setLast(resp.last)
        setPhone(resp.phone)
        // setActive(resp.active)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, first, last, phone });
    const studentData = { id, first, last, phone };

    fetch(API, {
      method: "PUT",
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


  return  (
  <>
  <div className="py-5 w-50 m-auto">
    <h3 className="text-center text-primary">Student Registration Form</h3>
    <form className="border border-light" onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          ID
        </label>
        <input
          type="text"
          id="exampleInputEmail1"
          value={id}
          // onMouseDown={e=>setValidate(true)}
          // onChange={(e) => setFirst(e.target.value)}
          className="form-control"
          aria-describedby="emailHelp"
          disabled="disabled"
        />
        {/* {first?.length == 0 && validate && <span className="text-danger">*Required field</span>} */}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          id="exampleInputEmail1"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          // onMouseDown={e=>setValidate(true)}
          className="form-control"
          aria-describedby="emailHelp"
          required
        />
        {/* {first?.length == 0 && validate && <span className="text-danger">*Required field</span>} */}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          id="exampleInputPassword1"
          name="exampleInputPassword1"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          // onMouseDown={e=>setValidate(true)}
          className="form-control"
          required
        />
        {/* {last?.length == 0 && validate && <span className="text-danger">*Required field</span>} */}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Phone No
        </label>
        <input
          type="text"
          id="exampleInputPassword1"
          name="exampleInputPassword1"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          // onMouseDown={e=>setValidate(true)}
          className="form-control"
          required
        />
        {/* {phone?.length == 0 && validate && <span className="text-danger">*Required field</span>} */}
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
)
};

export default EditStudent;
