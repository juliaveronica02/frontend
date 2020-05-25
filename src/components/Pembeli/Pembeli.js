import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
const Main = () => {
  const [data, setData] = useState([]);
  const userId = jwt.name;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL_ITEM}/${userId}`, {
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }, []);
  const showData = data.map((data, id) => {
    console.log("showdata", data);
    return (
      <tr key={id}>
        <td>{data.id}</td>

        <td>
          <img
            src={`${process.env.REACT_APP_API_URL_SERVER}/${data.imageUrl}`}
          />
        </td>
        <td>{data.name}</td>
      </tr>
    );
  });
  return (
    <div className="container pt-5 mt-5 text-center">
      <h1>Page Pembeli</h1>
      <table
        className="table table-dark table-striped table-hover justify-content-center"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </table>
    </div>
  );
};
export default Main;
