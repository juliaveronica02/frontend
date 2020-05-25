import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL_ITEM}`, {
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
        <td>{data.price}</td>

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
    <div>
      <table
        className="table table-dark table-striped table-hover justify-content-center"
        style={{ width: "70%" }}
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
