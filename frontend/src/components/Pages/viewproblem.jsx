import React from 'react';

const viewProblem = () => {
  return (
    <section
      className="mb-5 vh-100 bg-white bg-image"
      style={{ backgroundColor: '#FFFF' }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-10 col-xl-10">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Problem Statement
                  </h2>
                  <div className="p-3">
                    <h4>Title</h4>
                    <p>Title</p>
                  </div>
                  <div className="p-3">
                    <h2>Body</h2>
                    <p>Body</p>
                  </div>
                  <div className="p-3">
                    <h2>Input</h2>
                    <p>Input</p>
                  </div>
                  <div className="p-3">
                    <h2>Output</h2>
                    <p>Output</p>
                  </div>
                  <div className="row col-12 p-5">
                    <div className="col-6">
                      <label htmlFor="formFileSm" className="form-label">
                        Choose Your File
                      </label>
                    </div>
                    <div className="col-6 pt-4">
                      <a
                        type="submit"
                        href="/submission/"
                        className="btn btn-primary mb-3"
                      >
                        Submit Code
                      </a>
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

export default viewProblem;
