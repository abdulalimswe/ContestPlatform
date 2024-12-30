import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ViewProblem = () => {
  const [user, setUser] = useState({
    title: "",
    body: "",
    input: "",
    output: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/get/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading problem:", error.message);
    }
  };

  return (
    <section className="mb-5 vh-100 bg-white bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-10 col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Problem Statement
                  </h2>
                  <div className="p-3">
                    <h4>Title</h4>
                    {user.title}
                  </div>
                  <div className="p-3">
                    <h2>Body</h2>
                    <p>{user.body}</p>
                  </div>
                  <div className="p-3">
                    <h2>Input</h2>
                    <p>{user.input}</p>
                  </div>
                  <div className="p-3">
                    <h2>Output</h2>
                    <p>{user.output}</p>
                  </div>
                  <div className="row col-12 p-5">
                    <div className="col-6">
                      <label htmlFor="formFileSm" className="form-label">
                        Choose Your File
                      </label>
                      <input type="file" id="formFileSm" className="form-control" />
                    </div>
                    <div className="col-6 pt-4">
                      <button
                        type="button"
                        onClick={() => navigate("/submission/")}
                        className="btn btn-primary mb-3"
                      >
                        Submit Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProblem;
