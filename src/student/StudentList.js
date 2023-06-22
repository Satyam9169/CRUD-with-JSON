import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const StudentList = () => {
  // let navigate = useNavigate();
  // const API = "http://localhost:3030/student";
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate("/student/edit/" +id);
  };

  const DetailHandler = (id) => {
    navigate("/student/detail/" + id);
  };

  const DeleteHandler = (id) => {
    if (window.confirm("Are you sure want to Delete ?")) {
      fetch("http://localhost:3030/student/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Deleted Successfully")
          window.location.reload();
          // navigate("/");
          // return res.json();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  //   const loadStudent = async () => {
  //     const result = await axios.get(API);
  //     setStudent(result.data.reverse());
  //     console.log(result.data);
  //   };
  useEffect(() => {
    fetch("http://localhost:3030/student")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setStudent(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // loadStudent();
  }, []);

  return (
    <>
      <div className="container py-3">
        <h3 className="text-center">StudentList</h3>
        <div className="card-body">
          <div>
            <Link to="student/add" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Mobile no</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {student &&
              student.map((student, index) => (
                <tr className="table-light" key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.first}</td>
                  <td>{student.last}</td>
                  <td>{student.phone}</td>
                  <td className="">
                    <button
                      onClick={() => {
                        DetailHandler(student.id);
                      }}
                      className="btn btn-danger"
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        editHandler(student.id);
                      }}
                      className="btn btn-primary mx-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        DeleteHandler(student.id);
                      }}
                      className="btn btn-success"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
