import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Standings = () => {
  const [contestData, setContestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:8080/api/standings")
      .then((response) => {
        setContestData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contest standings:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Code Trap Contest Standings, Fall 2024
      </h2>
      <h4 className="text-center text-secondary">Contest is Running</h4>
      <table className="table table-bordered-none table-hover mt-3">
        <thead className="table-light">
          <tr>
            <th></th>
            <th>Name</th>
            {Array.from({ length: 6 }, (_, index) => (
              <th key={index} className="text-center">{String.fromCharCode(65 + index)}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contestData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                {user.name} <br />
                <span className="text-secondary">{user.details}</span>
              </td>
              {user.problems.map((problem, pIndex) => (
                <td
                  key={pIndex}
                  className={`text-center ${
                    problem.solved ? "table-success" : "table-danger"
                  }`}
                >
                  {problem.solved ? (
                    <span>
                      ✅ <small>({problem.time})</small>
                    </span>
                  ) : (
                    <span>❌</span>
                  )}
                </td>
              ))}
              {/* <td className="text-center fw-bold">{user.score}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
