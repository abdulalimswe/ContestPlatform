import React, { useState } from "react";
import axios from "axios";

const ContestForm = () => {
  const [contestDetails, setContestDetails] = useState({
    name: "",
    date: "",
    time: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContestDetails({ ...contestDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/saveContest", contestDetails);
      alert("Contest saved successfully!");
    } catch (error) {
      console.error("Error saving contest:", error);
      alert("Failed to save contest.");
    }
  };

  return (
    <div className="container my-5 col-md-6 bg-light p-5">
      <h2>Create Contest</h2>

        <form onSubmit={handleSubmit}>
          <div className="pt-4">
            <label className="form-label">
              Contest Name:
              <input
                type="text"
                name="name"
                value={contestDetails.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          
          <div className="pt-4">
            <label className="">
              Date:
              <input className=""
                type="date"
                name="date"
                value={contestDetails.date}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          
          <div className="pt-4">
              <label>
                Time:
                <input
                  type="time"
                  name="time"
                  value={contestDetails.time}
                  onChange={handleChange}
                  required
                />
              </label>
          </div>

          <div className="pt-4">
              <label>
                Duration (in minutes):
                <input
                  type="number"
                  name="duration"
                  value={contestDetails.duration}
                  onChange={handleChange}
                  required
                />
              </label>
          </div>
          <div className="pt-3 text-center">
            <button type="submit" className="btn btn-primary mt-3">Save Contest</button>
          </div>
          
        </form>
      </div>
  );
};

export default ContestForm;
