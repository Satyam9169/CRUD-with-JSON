import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3030/student/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  return (
    <>
      <div className="w-50 m-auto py-4 ">
        <h3 className="text-center text-success">View Student Details</h3>
        <div className="card">
          <div className="card-header">Id : ({data.id})</div>
          <div className="card-body">
            <p className="card-text">First Name : {data.first}</p>
            <p className="card-text">Last Name : {data.last}</p>
            <p className="card-text">Mobile No : {data.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStudent;
