import React from "react";
import { useState } from "react";
import { addProblem } from "../../service/problemService";
import { useNavigate } from "react-router-dom";

const CreateProblem = () => {
    const navigate = useNavigate();

    const [problem, setProblem] = useState({title: "", body: "", input: "", output: ""});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setProblem((prevProblem) => ({
          ...prevProblem,
          [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/problem");
        addProblem(problem)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }


  return (
      <section className="vh-100 bg-white" style={{ backgroundColor: "#FFFF" }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-9 col-xl-9">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <h4 className="text-uppercase text-center mb-3">Create Your Problem</h4>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" >Title </label>
                        <input onChange={onChangeHandler} type="text" name="title" id="title" className="form-control form-control-lg"/>
                      </div>

                      <div className="mb-3">
                        <label  className="form-label">Body</label>
                        <textarea onChange={onChangeHandler} name="body" className="form-control" id="bodyTextarea" rows="3"></textarea>
                      </div>

                      <div className="mb-3">
                        <label  className="form-label"> Input </label>
                        <textarea onChange={onChangeHandler} name="input" className="form-control" id="inputTextarea" rows="3"></textarea>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Output</label>
                        <textarea onChange={onChangeHandler} name="output" className="form-control" id="outputTextarea" rows="3"></textarea>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button onClick={submitHandler} type="submit" className="btn btn-success btn-block px-5  gradient-custom-4 text-body">Save</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CreateProblem;
